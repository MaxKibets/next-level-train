import Link from "next/link";

import { Button, Logo } from "@/components/ui";
import { CREATE_PLAN_URL, DASHBOARD_URL } from "@/constants/routes";
import { SIZE } from "@/constants/ui";

import LogoutButton from "../LogoutButton";
import css from "./styles.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href={DASHBOARD_URL} className={css.logo}>
        <Logo size={SIZE.SMALL} />
      </Link>
      <Button href={CREATE_PLAN_URL}>Create weekly plan</Button>
      <LogoutButton />
    </header>
  );
};

export default Header;
