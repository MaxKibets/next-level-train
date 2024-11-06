import { Button } from "@/components/ui";

import { logoutAction } from "./logoutButton.actions";

const LogoutButton = () => (
  <form action={logoutAction}>
    <Button>Logout</Button>
  </form>
);

export default LogoutButton;
