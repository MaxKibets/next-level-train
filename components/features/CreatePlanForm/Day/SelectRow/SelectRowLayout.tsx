import { FC, memo } from "react";
import { LuListMinus } from "react-icons/lu";

import { Group, Select, Option, Button } from "@/components/ui";
import { BUTTON_APPEARANCE, BUTTON_TYPE, SIZE } from "@/constants/ui";

import { SelectRowLayoutProps } from "./types";
import { useDayContext } from "../hooks";
import SelectRowError from "./SelectRowError";

const CategoryOptions = () => {
  const { categories } = useDayContext();

  return categories.map((category) => <Option key={category} value={category} />);
};

const LevelOptions = () => {
  const { levels } = useDayContext();

  return levels.map((level) => <Option key={level} value={level} />);
};

const SelectRowLayout: FC<SelectRowLayoutProps> = ({
  dayName,
  rowId,
  onChangeCategory,
  onRemoveButtonClick,
}) => {
  console.log("rendering SelectRowLayout");
  return (
    <Group>
      <Select
        name={`${dayName}:${rowId}:category`}
        placeholder="type"
        onSelectChange={onChangeCategory}
      >
        <CategoryOptions />
      </Select>
      <SelectRowError rowId={rowId} forSelect={"category"} />
      <Select name={`${dayName}:${rowId}:level`} placeholder="level">
        <LevelOptions />
      </Select>
      <SelectRowError rowId={rowId} forSelect={"level"} />
      <Button
        appearance={BUTTON_APPEARANCE.DANGER}
        type={BUTTON_TYPE.BUTTON}
        size={SIZE.SMALL}
        onClick={onRemoveButtonClick}
      >
        <LuListMinus size="1rem" />
      </Button>
    </Group>
  );
};

// this is unnecessary optimization, just for demonstration :)
export default memo(SelectRowLayout);
