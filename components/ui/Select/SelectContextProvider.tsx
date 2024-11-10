import { FC, createContext, useState } from "react";

import {
  DefaultValue,
  SelectContentProviderProps,
  SelectContextType,
} from "./select.types";

export const SelectContext = createContext<SelectContextType | null>(null);

const SelectContextProvider: FC<SelectContentProviderProps> = ({
  children,
  defaultValue = "",
  onSelectChange,
}) => {
  const [activeValue, setActiveValue] = useState<DefaultValue>(defaultValue);

  return (
    <SelectContext.Provider value={{ activeValue, setActiveValue, onSelectChange }}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
