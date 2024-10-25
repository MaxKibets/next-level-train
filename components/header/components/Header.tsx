import React from "react";

import { Button } from "@/components/ui";
import { logout } from "@/components/auth/form/utils/authActions";

const Header = () => {
  return (
    <header>
      <form action={logout}>
        <Button>Logout</Button>
      </form>
    </header>
  );
};

export default Header;
