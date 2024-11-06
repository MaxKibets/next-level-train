import { FC } from "react";
import cn from "classnames";

import { SelectLayoutProps } from "./select.types";
import css from "./select.module.css";

const SelectLayout: FC<SelectLayoutProps> = ({
  children,
  activeValue,
  name,
  placeholder,
  onClick,
  isOpen,
}) => {
  return (
    <div className={css.wrap}>
      <input
        type="text"
        name={name}
        value={activeValue}
        className={css.input}
        readOnly
        placeholder={placeholder}
        onClick={onClick}
      />
      <div onClick={onClick} className={cn(css.dropdown, isOpen && css.opened)}>
        {children}
      </div>
    </div>
  );
};

export default SelectLayout;
