import React from "react";

import css from "./header.module.css";
import LogoutButton from "../LogoutButton";

const Header = () => {
  return (
    <header className={css.header}>
      <LogoutButton className={css.logout} />
    </header>
  );
};

export default Header;
