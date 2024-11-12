import { FC } from "react";

import { Error } from "@/components/ui";

import { useDayContext } from "../hooks";
import { SelectRowErrorProps } from "./types";

const SelectRowError: FC<SelectRowErrorProps> = ({ rowId, forSelect }) => {
  const { errors } = useDayContext();
  const selectErrors = errors?.[rowId]?.[forSelect];

  if (!selectErrors) {
    return null;
  }

  return <Error messages={selectErrors} />;
};

export default SelectRowError;
