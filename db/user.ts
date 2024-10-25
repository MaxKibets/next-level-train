import db from "./db";

export const createUser = (email: string, password: string) => {
  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);

  return result.lastInsertRowid;
};

type userProps = {
  id: string;
  password: string;
  name: string;
  email: string;
  photo_url: string;
};

export const getUserByEmail = (email: string): userProps => {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email) as userProps;
};
