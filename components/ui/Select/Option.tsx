"use client";

import { FC } from "react";
import cn from "classnames";

import { useSelectContext } from "./select.hooks";
import { OptionProps } from "./select.types";
import css from "./select.module.css";

const Option: FC<OptionProps> = ({ value }) => {
  const { activeValue, setActiveValue } = useSelectContext();

  return (
    <div
      className={cn(css.option, activeValue === value && css.active)}
      onClick={() => setActiveValue(value)}
    >
      {value}
    </div>
  );
};

export default Option;
