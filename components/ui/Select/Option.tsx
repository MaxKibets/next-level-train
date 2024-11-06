"use client";

import { FC } from "react";
import cn from "classnames";

import { useSelectContext } from "./select.hooks";
import { OptionType } from "./select.types";
import css from "./select.module.css";

const Option: FC<OptionType> = ({ value }) => {
  const { activeValue, setActiveValue } = useSelectContext();

  return (
    <div
      className={cn(css.option, activeValue === value && css.active)}
      onClick={() => setActiveValue(value)}
    >{`${value} ${activeValue === value}`}</div>
  );
};

export default Option;
