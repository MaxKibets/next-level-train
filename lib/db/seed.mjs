import sql from "better-sqlite3";

import exercises from "./exercises.json" assert { type: "json" };

const db = sql("next_level_train.db");

const createUsersTable = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      email TEXT UNIQUE,
      password TEXT
      name TEXT,
      photo_url TEXT
    );
  `);

  console.log("Users table created.");
};

const createSessionsTable = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT NOT NULL PRIMARY KEY,
      expires_at INTEGER NOT NULL,
      user_id TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  console.log("Sessions table created.");
};

const createExercisesTable = () => {
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS exercises (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT,
      level INTEGER,
      name TEXT,
      description TEXT,
      goal_beginner TEXT,
      goal_intermediate TEXT,
      goal_advanced TEXT
    )
  `,
  ).run();

  console.log("Exercises table created.");

  const insertExercise = db.prepare(`
    INSERT INTO exercises (category, level, name, description, goal_beginner, goal_intermediate, goal_advanced)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  const insertMany = db.transaction((exercises) => {
    for (const exercise of exercises) {
      insertExercise.run(...exercise);
    }
  });

  insertMany(exercises);

  console.log("Exercises table prepopulated.");
};

createUsersTable();
createSessionsTable();
createExercisesTable();

db.close();
