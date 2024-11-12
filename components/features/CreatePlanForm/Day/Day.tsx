"use client";

import { FC } from "react";

import { DayInnerProps, DayProps } from "./types";
import DayContextProvider from "./DayContextProvider";
import { useRowManagement } from "./hooks";
import DayLayout from "./DayLayout";

const DayInner: FC<DayInnerProps> = ({ maxRowsCount, ...props }) => {
  const { rows, handleAddRow, handleRemoveRow } = useRowManagement();

  return (
    <DayLayout
      showAddButton={rows.length !== maxRowsCount}
      rows={rows}
      onRemove={handleRemoveRow}
      onAddButtonClick={handleAddRow}
      {...props}
    />
  );
};

const Day: FC<DayProps> = ({ errors, categories, levels, dayName }) => {
  return (
    <DayContextProvider categories={categories} levels={levels} errors={errors}>
      <DayInner maxRowsCount={categories.length} dayName={dayName} />
    </DayContextProvider>
  );
};

export default Day;
