"use client";

import { FC } from "react";

import { DayProps } from "./types";
import DayContextProvider from "./DayContextProvider";
import SelectRowManager from "./SelectRowManager";

const Day: FC<DayProps> = (props) => {
  // TODO from server
  const categoriesInitial = ["cat_1", "cat_2", "cat_3"];
  const levels = ["1", "2", "3", "4", "5"];

  return (
    <DayContextProvider categories={categoriesInitial} levels={levels}>
      <SelectRowManager maxRowsCount={categoriesInitial.length} {...props} />
    </DayContextProvider>
  );
};

export default Day;
