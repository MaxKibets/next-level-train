import { FC } from "react";

import { Error } from "@/components/ui";

import { useDayContext } from "../hooks";
import { SelectRowErrorProps } from "./types";

const SelectRowError: FC<SelectRowErrorProps> = ({ rowId, forSelect }) => {
  const { errors } = useDayContext();
  const selectErrors = errors?.[rowId]?.[forSelect];

  return selectErrors && <Error messages={selectErrors} />;
};

export default SelectRowError;
