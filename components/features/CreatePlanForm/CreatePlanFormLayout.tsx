import { FC } from "react";

import { Row, Button, Group } from "@/components/ui";
import { ALIGN, SIZE } from "@/constants/ui";
import { DASHBOARD_URL } from "@/constants/routes";

import css from "./styles.module.css";
import Day from "./Day";
import { CreatePlanFormLayoutProps } from "./types";

const BUTTON = {
  CANCEL: "Cancel",
  SAVE: "Save",
};

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CreatePlanFormLayout: FC<CreatePlanFormLayoutProps> = ({ action }) => (
  <form className={css.wrap} action={action}>
    <div className={css.days}>
      {DAYS.map((day) => (
        <Day key={day} dayName={day} />
      ))}
    </div>
    <Row size={SIZE.LARGE} align={ALIGN.CENTER}>
      <Group>
        <Button size={SIZE.LARGE} href={DASHBOARD_URL}>
          {BUTTON.CANCEL}
        </Button>
        <Button size={SIZE.LARGE}>{BUTTON.SAVE}</Button>
      </Group>
    </Row>
  </form>
);

export default CreatePlanFormLayout;
