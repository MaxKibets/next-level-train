import { AUTH_MODE } from "./auth";

const AUTH_BASE_URL = "/auth";

export const AUTH_URL = {
  LOGIN: `${AUTH_BASE_URL}?mode=${AUTH_MODE.LOGIN}`,
  REGISTER: `${AUTH_BASE_URL}?mode=${AUTH_MODE.REGISTER}`,
} as const;

export const HOME_URL = "/";

export const DASHBOARD_URL = "/dashboard";

const CREATE = "/create";

export const CREATE_PLAN_URL = `${CREATE}/plan`;