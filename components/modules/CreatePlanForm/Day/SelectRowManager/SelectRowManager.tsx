import { FC } from "react";

import { SelectRowManagerProps } from "./types";
import { useRowManagement } from "./hooks";
import SelectRowManagerLayout from "./SelectRowManagerLayout";

const SelectRowManager: FC<SelectRowManagerProps> = ({ maxRowsCount, ...props }) => {
  const { rows, handleAddRow, handleRemoveRow } = useRowManagement();

  return (
    <SelectRowManagerLayout
      showAddButton={rows.length !== maxRowsCount}
      rows={rows}
      onRemove={handleRemoveRow}
      onAddButtonClick={handleAddRow}
      {...props}
    />
  );
};

export default SelectRowManager;
