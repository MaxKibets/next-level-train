import { FC } from "react";

import { Button } from "@/components/ui";

import { LogoutButtonProps } from "./logoutButton.types";
import { logoutAction } from "./logoutButton.actions";

const LogoutButton: FC<LogoutButtonProps> = ({ className }) => (
  <form action={logoutAction} className={className}>
    <Button>Logout</Button>
  </form>
);

export default LogoutButton;
