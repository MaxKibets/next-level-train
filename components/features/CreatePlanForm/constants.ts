import { z } from "zod";

export const FIELD = {
  PLAN_NAME: "plan_name",
  CATEGORY: "category",
  LEVEL: "level",
};

const ERRORS_TEXT = {
  EMPTY: "Cant be empty",
};

// export const CREATE_PLAN_SCHEMA = z.intersection(
//   z.object({ plan_name: z.string().min(1, ERRORS_TEXT.NAME) }),
//   z.record(z.string(), z.string().min(1, ERRORS_TEXT.SELECT_OPTION)),
// );

export const CREATE_PLAN_SCHEMA = z.record(
  z.string(),
  z.string().min(1, ERRORS_TEXT.EMPTY),
);
