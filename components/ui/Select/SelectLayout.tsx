import { FC } from "react";
import cn from "classnames";
import { LuChevronDown } from "react-icons/lu";

import { SelectLayoutProps } from "./types";
import css from "./styles.module.css";

const SelectLayout: FC<SelectLayoutProps> = ({
  children,
  activeValue,
  name,
  placeholder,
  onClick,
  isOpen,
}) => {
  return (
    <div className={css.wrap} onClick={onClick}>
      <input
        type="text"
        name={name}
        value={activeValue}
        className={css.input}
        readOnly
        placeholder={placeholder}
      />
      <LuChevronDown
        color="var(--green)"
        className={cn(css.arrow, isOpen && css.opened)}
      />
      <div className={cn(css.dropdown, isOpen && css.opened)}>{children}</div>
    </div>
  );
};

export default SelectLayout;
