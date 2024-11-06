import sql from "better-sqlite3";
import exercises from "./exercises.json";

const db = sql("next_level_train.db");

const doesTableExist = (tableName: string): boolean => {
  const stmt = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?");
  const result = stmt.get(tableName);
  return result !== undefined;
};

// const dropTable = (tableName: string) => {
//   const stmt = db.prepare(`DROP TABLE IF EXISTS ${tableName}`);
//   stmt.run();
//   console.log(`Table '${tableName}' has been dropped.`);
// };

// // dropTable("exercises");

// Function to initialize and prepopulate the database
function initializeDatabase() {
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

  // Check if the exercises table already exists
  const tableExists = doesTableExist("exercises");

  if (!tableExists) {
    console.log("Database is empty. Prepopulating data...");

    // Create the exercises table
    db.prepare(
      `
      CREATE TABLE exercises (
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

    // Insert bridge exercises data
    const insertExercise = db.prepare(`
      INSERT INTO exercises (category, level, name, description, goal_beginner, goal_intermediate, goal_advanced)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    // Insert each exercise into the table
    const insertMany = db.transaction((exercises) => {
      for (const exercise of exercises) {
        insertExercise.run(...exercise);
      }
    });

    // Execute insertion of all exercises
    insertMany(exercises);

    console.log("Database prepopulated with exercises.");
  } else {
    console.log("Database already populated.");
  }
}

initializeDatabase();

export default db;
