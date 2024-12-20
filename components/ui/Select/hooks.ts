import { useContext, useEffect, useState } from "react";

import { SelectContext } from "./SelectContextProvider";

export const useSelectContext = () => {
  const selectContext = useContext(SelectContext);

  if (!selectContext) {
    throw new Error("[ui/Option] component must be used within [ui/Select] component");
  }

  return selectContext;
};

export const useToggleDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      const closeDropdown = () => setIsOpen(false);

      document.addEventListener("click", closeDropdown);

      return () => {
        document.removeEventListener("click", closeDropdown);
      };
    }
  }, [isOpen]);

  return { isOpen, toggleOpen };
};
