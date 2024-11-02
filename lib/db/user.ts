import { UserCredentialsProps, UserProps } from "@/types/user";

import db from ".";

export const createUser = ({ email, password }: UserCredentialsProps): number => {
  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);

  return result.lastInsertRowid as number;
};

export const getUserByEmail = (email: string): UserProps => {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email) as UserProps;
};
