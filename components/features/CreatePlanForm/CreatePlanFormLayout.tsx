import { FC } from "react";

import { Row, Button, Group } from "@/components/ui";
import { ALIGN, SIZE } from "@/constants/ui";
import { DASHBOARD_URL } from "@/constants/routes";
import { DAYS } from "@/constants/days";

import css from "./styles.module.css";
import Day from "./Day";
import { CreatePlanFormLayoutProps } from "./types";

const BUTTON = {
  CANCEL: "Cancel",
  SAVE: "Save",
};

const CreatePlanFormLayout: FC<CreatePlanFormLayoutProps> = ({
  errors,
  action,
  ...props
}) => (
  <form className={css.wrap} action={action}>
    <div className={css.days}>
      {DAYS.map((day) => (
        <Day errors={errors[day]} key={day} dayName={day} {...props} />
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
