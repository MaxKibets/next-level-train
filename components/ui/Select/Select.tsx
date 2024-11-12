"use client";

import { FC } from "react";

import { SelectProps } from "./types";
import { useSelectContext, useToggleDropdown } from "./hooks";
import SelectLayout from "./SelectLayout";
import SelectContextProvider from "./SelectContextProvider";

const SelectInner: FC<SelectProps> = ({ children, ...props }) => {
  const { activeValue } = useSelectContext();
  const { isOpen, toggleOpen } = useToggleDropdown();

  return (
    <SelectLayout
      isOpen={isOpen}
      onClick={toggleOpen}
      activeValue={activeValue}
      {...props}
    >
      {children}
    </SelectLayout>
  );
};

const Select: FC<SelectProps> = ({
  children,
  defaultValue,
  onSelectChange,
  ...props
}) => {
  return (
    <SelectContextProvider defaultValue={defaultValue} onSelectChange={onSelectChange}>
      <SelectInner {...props}>{children}</SelectInner>
    </SelectContextProvider>
  );
};

export default Select;
