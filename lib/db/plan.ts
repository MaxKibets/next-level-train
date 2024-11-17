import { DayPlan } from "@/types/exercises";

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

  db.prepare(`UPDATE ${tableName} SET isActive = 0`).run();

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

export const getActivePlan = (userId: string): DayPlan[] | [] => {
  const tableName = `plan_${userId}`;

  return db
    .prepare(
      `
        SELECT day, plan, plan_name FROM ${tableName} WHERE isActive = 1
      `,
    )
    .all() as DayPlan[] | [];
};
