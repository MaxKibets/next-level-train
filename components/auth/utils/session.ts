import { cookies } from "next/headers";
import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";

import db from "@/db/db";

const adapter = new BetterSqlite3Adapter(db, {
  user: "users", // The table name for users
  session: "sessions", // The table name for sessions
});

export const lucia = new Lucia(adapter, {
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
  const sessionCookie = cookies().get(lucia.sessionCookieName);
  const emptySessionShape = {
    user: null,
    session: null,
  };

  if (!sessionCookie) {
    return emptySessionShape;
  }

  const sessionId = sessionCookie.value;

  if (!sessionId) {
    return emptySessionShape;
  }

  const result = await lucia.validateSession(sessionId);

  try {
    // Prolong the session
    if (result.session && result.session.fresh) {
      setCookie(result.session.id);
    }

    // If session is expired, create a "blank" session
    if (!result.session) {
      setCookie();
    }
  } catch (error) {
    throw error;
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
