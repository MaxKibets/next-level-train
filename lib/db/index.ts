import sql from "better-sqlite3";

const db = sql("training.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT
    name TEXT,
    photo_url TEXT
  );
`);

db.exec(`CREATE TABLE IF NOT EXISTS sessions (
  id TEXT NOT NULL PRIMARY KEY,
  expires_at INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
)`);

// db.exec(`CREATE TABLE IF NOT EXISTS squats_exercises (
//   exercise_id SERIAL PRIMARY KEY,
//   exercise_name VARCHAR(50) NOT NULL,
//   performance TEXT,
//   goals TEXT
//   images JSON NOT NULL
// )`);

export default db;
