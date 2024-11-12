import { FC } from "react";
import { LuHeartPulse, LuListPlus } from "react-icons/lu";

import { Button, Card, Group, Heading, Row } from "@/components/ui";
import { ALIGN, BUTTON_TYPE, HEADING_SIZE, SIZE } from "@/constants/ui";

import SelectRow from "./SelectRow";
import { DayLayoutProps } from "./types";

const DayLayout: FC<DayLayoutProps> = ({
  dayName,
  rows,
  showAddButton,
  onRemove,
  onAddButtonClick,
}) => (
  <Card title={<Heading size={HEADING_SIZE.H4}>{dayName}</Heading>}>
    {rows.length ? (
      rows.map((rowId) => (
        <SelectRow key={rowId} dayName={dayName} rowId={rowId} onRemove={onRemove} />
      ))
    ) : (
      <Row align={ALIGN.CENTER}>
        <LuHeartPulse color="var(--green)" size="2.85rem" />
      </Row>
    )}
    {showAddButton && (
      <Group align={ALIGN.CENTER}>
        <Button type={BUTTON_TYPE.BUTTON} size={SIZE.SMALL} onClick={onAddButtonClick}>
          <LuListPlus size="1rem" />
        </Button>
      </Group>
    )}
  </Card>
);

export default DayLayout;
