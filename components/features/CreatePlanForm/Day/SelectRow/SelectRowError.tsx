import { useDayContext } from "../hooks";

const SelectRowError = ({ rowId, forSelect }) => {
  const { errors } = useDayContext();
  const error = errors?.[rowId]?.[forSelect];

  if (!error) {
    return null;
  }

  return error;
};

export default SelectRowError;
