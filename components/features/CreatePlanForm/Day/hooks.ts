import { useContext } from "react";

import { DayContext } from "./DayContextProvider";

export const useDayContext = () => {
  const dayContext = useContext(DayContext);

  if (!dayContext) {
    throw new Error("DayContextProvider is not found");
  }

  return dayContext;
};
