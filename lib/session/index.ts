import { cookies } from "next/headers";
import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";

import db from "../db";

const adapter = new BetterSqlite3Adapter(db, {
  user: "users", // The table name for users
  session: "sessions", // The table name for sessions
});

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production", // works only in production with HTTPS
    },
  },
});

const setCookie = (sessionId?: string) => {
  let sessionCookie;

  if (sessionId) {
    sessionCookie = lucia.createSessionCookie(sessionId);
  } else {
    sessionCookie = lucia.createBlankSessionCookie();
  }

  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
};

export const createAuthSession = async (userId: string) => {
  const session = await lucia.createSession(userId, {});
  setCookie(session.id);
};

export const verifyAuth = async () => {
  const emptySessionShape = {
    user: null,
    session: null,
  };

  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) return emptySessionShape;

  const result = await lucia.validateSession(sessionId);

  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);

      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }

    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();

      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
  } catch {
    // Next.js throws error when attempting to set cookies when rendering page
  }

  return result;
};

export const destroySession = async () => {
  const { session } = await verifyAuth();

  if (!session) {
    return {
      error: "Unauthorized!",
    };
  }

  await lucia.invalidateSession(session.id); // delete from the database

  setCookie(); // clear the cookie
};
