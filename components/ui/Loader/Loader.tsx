import React from "react";

import { SIZE } from "@/constants/global";

import Logo from "../Logo/Logo";
import css from "./loader.module.css";

const Loader = () => {
  return <Logo size={SIZE.SMALL} className={css.loader} />;
};

export default Loader;
