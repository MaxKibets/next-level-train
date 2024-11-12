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
}) => (
  <Group>
    <div>
      <Select
        name={`${dayName}:${rowId}:category`}
        placeholder="type"
        onSelectChange={onChangeCategory}
        errors={<SelectRowError rowId={rowId} forSelect={"category"} />}
      >
        <CategoryOptions />
      </Select>
    </div>
    <div>
      <Select
        name={`${dayName}:${rowId}:level`}
        placeholder="level"
        errors={<SelectRowError rowId={rowId} forSelect={"level"} />}
      >
        <LevelOptions />
      </Select>
    </div>
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

// this is unnecessary optimization, just for demonstration :)
export default memo(SelectRowLayout);
