"use client";

import { FC } from "react";
import cn from "classnames";

import { useSelectContext } from "./select.hooks";
import { OptionProps } from "./select.types";
import css from "./selectLayout.module.css";

const Option: FC<OptionProps> = ({ value }) => {
  const { activeValue, setActiveValue, onSelectChange } = useSelectContext();

  return (
    <div
      className={cn(css.option, activeValue === value && css.active)}
      onClick={() => {
        onSelectChange?.({ prevValue: activeValue, value });
        setActiveValue(value);
      }}
    >
      {value}
    </div>
  );
};

export default Option;
