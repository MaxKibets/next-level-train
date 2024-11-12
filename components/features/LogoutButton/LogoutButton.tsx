import { Button } from "@/components/ui";

import { logoutAction } from "./actions";

const LogoutButton = () => (
  <form action={logoutAction}>
    <Button>Logout</Button>
  </form>
);

export default LogoutButton;
