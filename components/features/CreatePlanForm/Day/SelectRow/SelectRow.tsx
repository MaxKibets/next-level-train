import { FC, memo, useCallback, useRef } from "react";

import SelectRowLayout from "./SelectRowLayout";
import { ChangeCategoryProps, SelectRowProps } from "./types";
import { useDayContext } from "../hooks";
import { ACTION } from "../DayContextProvider";

const SelectRow: FC<SelectRowProps> = ({ dayName, rowId, onRemove }) => {
  const { dispatch } = useDayContext();
  const selectedCategory = useRef("");

  const handleChangeCategory = useCallback<(props: ChangeCategoryProps) => void>(
    ({ prevValue, value }) => {
      selectedCategory.current = value;

      if (!prevValue) {
        dispatch({ type: ACTION.REMOVE, category: value });
      } else {
        dispatch({ type: ACTION.CHANGE, prevCategory: prevValue, category: value });
      }
    },
    [dispatch],
  );

  const handleRemoveButtonClick = useCallback(() => {
    if (selectedCategory.current) {
      dispatch({ type: ACTION.ADD, category: selectedCategory.current });
    }

    onRemove(rowId);
  }, [dispatch, onRemove, rowId]);

  return (
    <SelectRowLayout
      dayName={dayName}
      rowId={rowId}
      onChangeCategory={handleChangeCategory}
      onRemoveButtonClick={handleRemoveButtonClick}
    />
  );
};

// this is unnecessary optimization (as useCallback's here), just for demonstration :)
export default memo(SelectRow);
