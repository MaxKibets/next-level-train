import { useCallback, useContext, useState } from "react";

import { DayContext } from "./DayContextProvider";

export const useDayContext = () => {
  const dayContext = useContext(DayContext);

  if (!dayContext) {
    throw new Error("DayContextProvider is not found");
  }

  return dayContext;
};

export const useRowManagement = (initialRows: string[] = []) => {
  const [rows, setRows] = useState<string[]>(initialRows);

  const handleAddRow = () => {
    setRows((prev) => [...prev, `${new Date().getTime()}`]);
  };

  // useCallback here to prevent rerender of SelectRowLayout
  const handleRemoveRow = useCallback((rowId: string) => {
    setRows((prev) => prev.filter((id) => id !== rowId));
  }, []);

  return { rows, handleAddRow, handleRemoveRow };
};
