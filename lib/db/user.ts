import { UserCredentials, User } from "@/types/user";

import db from ".";

export const createUser = ({ email, password }: UserCredentials) => {
  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);

  return result.lastInsertRowid as number;
};

export const getUserByEmail = (email: string) => {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email) as User;
};
