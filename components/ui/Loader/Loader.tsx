import { FC } from "react";

import { SIZE } from "@/constants/ui";

import Logo from "../Logo/Logo";
import css from "./loader.module.css";

const Loader: FC<{ fixed?: boolean }> = ({ fixed }) => {
  const logo = <Logo size={SIZE.SMALL} className={css.loader} />;

  return fixed ? <div className={css.fixed}>{logo}</div> : logo;
};

export default Loader;
