import { z } from "zod";

const ERRORS_TEXT = {
  SELECT_OPTION: "Select an option",
};

export const CREATE_PLAN_SCHEMA = z.record(
  z.string(),
  z.string().min(1, ERRORS_TEXT.SELECT_OPTION),
);
