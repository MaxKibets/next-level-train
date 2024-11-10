import { AUTH_MODE } from "@/constants/auth";

export type AuthPageProps = {
  searchParams: {
    mode: (typeof AUTH_MODE)[keyof typeof AUTH_MODE];
  };
};
