import React from "react";

import { Logo } from "@/components/ui";

import css from "../styles/loader.module.css";

const Loader = () => {
  return <Logo size="small" className={css.loader} />;
};

export default Loader;
