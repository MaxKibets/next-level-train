import db from ".";

export const createPlan = (userId: string, data: (string | number)[][]) => {
  const tableName = `plan_${userId}`;

  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      plan_name TEXT,
      day TEXT,
      isActive INTEGER,
      plan TEXT
    )
  `,
  ).run();

  const insertStmt = db.prepare(`
    INSERT INTO ${tableName} (plan_name, day, isActive, plan)
    VALUES (?, ?, ?, ?)
  `);

  const insertMany = db.transaction((rows) => {
    rows.forEach((row: (string | number)[]) => {
      insertStmt.run(...row);
    });
  });

  insertMany(data);
};
