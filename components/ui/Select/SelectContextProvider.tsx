import { ReactNode, createContext, useState } from "react";

import { SelectContextType } from "./select.types";

export const SelectContext = createContext<SelectContextType | null>(null);

const SelectContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeValue, setActiveValue] = useState<string>("");

  return (
    <SelectContext.Provider value={{ activeValue, setActiveValue }}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
