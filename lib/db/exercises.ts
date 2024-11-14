import { Exercises } from "@/types/exercises";

import db from ".";

export const getAllExercises = (): Exercises => {
  const result = db.prepare("SELECT DISTINCT category, level FROM exercises").all() as {
    category: string;
    level: string;
  }[];

  return {
    categories: Array.from(new Set(result.map((item) => item.category))),
    levels: Array.from(new Set(result.map((item) => item.level))),
  };
};
