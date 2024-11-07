"use client";

import { FC } from "react";

import { SelectProps } from "./select.types";
import { useSelectContext, useToggleDropdown } from "./select.hooks";
import SelectLayout from "./SelectLayout";
import SelectContextProvider from "./SelectContextProvider";

// TODO: Render an error component (but first, create it! Don't forget about the Input!)
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

const Select: FC<SelectProps> = ({ children, defaultValue, ...props }) => {
  return (
    <SelectContextProvider defaultValue={defaultValue}>
      <SelectInner {...props}>{children}</SelectInner>
    </SelectContextProvider>
  );
};

export default Select;