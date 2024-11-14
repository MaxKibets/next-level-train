import { FC } from "react";
import { LuHeartPulse, LuListPlus } from "react-icons/lu";

import { Button, Card, Heading } from "@/components/ui";
import { BUTTON_TYPE, HEADING_SIZE, SIZE } from "@/constants/ui";

import SelectRow from "./SelectRow";
import { DayLayoutProps } from "./types";
import css from "./styles.module.css";

const DayLayout: FC<DayLayoutProps> = ({
  dayName,
  rows,
  showAddButton,
  onRemove,
  onAddButtonClick,
}) => (
  <Card title={<Heading size={HEADING_SIZE.H4}>{dayName}</Heading>} className={css.wrap}>
    <div className={css.inner}>
      {rows.length ? (
        rows.map((rowId) => (
          <SelectRow key={rowId} dayName={dayName} rowId={rowId} onRemove={onRemove} />
        ))
      ) : (
        <LuHeartPulse className={css.icon} color="var(--green)" size="3.845rem" />
      )}
    </div>
    {showAddButton && (
      <Button
        className={css.button}
        type={BUTTON_TYPE.BUTTON}
        size={SIZE.SMALL}
        onClick={onAddButtonClick}
      >
        <LuListPlus size="1rem" />
      </Button>
    )}
  </Card>
);

export default DayLayout;
