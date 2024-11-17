import { FC, memo } from "react";
import { LuMinus } from "react-icons/lu";

import { Group, Select, Option, Button } from "@/components/ui";
import { BUTTON_APPEARANCE, BUTTON_TYPE, SIZE } from "@/constants/ui";

import { SelectRowLayoutProps } from "./types";
import { useDayContext } from "../hooks";
import SelectRowError from "./SelectRowError";
import { FIELD } from "../../constants";
import css from "./styles.module.css";

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
    <Select
      className={css.category}
      name={`${dayName}:${rowId}:${FIELD.CATEGORY}`}
      placeholder="type"
      onSelectChange={onChangeCategory}
      errors={<SelectRowError rowId={rowId} forSelect={FIELD.CATEGORY} />}
    >
      <CategoryOptions />
    </Select>
    <Select
      className={css.level}
      name={`${dayName}:${rowId}:${FIELD.LEVEL}`}
      placeholder="level"
      errors={<SelectRowError rowId={rowId} forSelect={FIELD.LEVEL} />}
    >
      <LevelOptions />
    </Select>
    <Button
      className={css.button}
      appearance={BUTTON_APPEARANCE.DANGER}
      type={BUTTON_TYPE.BUTTON}
      size={SIZE.SMALL}
      onClick={onRemoveButtonClick}
    >
      <LuMinus size="1rem" />
    </Button>
  </Group>
);

// this is unnecessary optimization, just for demonstration :)
export default memo(SelectRowLayout);
