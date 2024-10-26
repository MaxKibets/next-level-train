import React from "react";

import { Button } from "@/components/ui";
import { logout } from "@/components/auth/form/utils/authActions";

import css from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <form action={logout} className={css.logout}>
        <Button>Logout</Button>
      </form>
    </header>
  );
};

export default Header;
