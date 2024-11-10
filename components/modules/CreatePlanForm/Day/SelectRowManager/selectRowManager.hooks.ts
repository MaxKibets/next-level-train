import { useCallback, useState } from "react";

export const useRowManagement = (initialRows: string[] = []) => {
  const [rows, setRows] = useState<string[]>(initialRows);

  const handleAddRow = () => {
    setRows((prev) => [...prev, `${new Date().getTime()}`]);
  };

  const handleRemoveRow = useCallback((rowId: string) => {
    setRows((prev) => prev.filter((id) => id !== rowId));
  }, []);

  return { rows, handleAddRow, handleRemoveRow };
};
