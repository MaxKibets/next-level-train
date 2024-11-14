import { FC } from "react";

import { Row, Button, Card, Input } from "@/components/ui";
import { ALIGN, SIZE } from "@/constants/ui";
import { DASHBOARD_URL } from "@/constants/routes";
import { DAYS } from "@/constants/days";

import css from "./styles.module.css";
import Day from "./Day";
import { CreatePlanFormLayoutProps } from "./types";
import { FIELD } from "./constants";

const TEXT = {
  INPUT: "Plan name",
  BUTTON: {
    CANCEL: "Cancel",
    SAVE: "Save",
  },
};

const CreatePlanFormLayout: FC<CreatePlanFormLayoutProps> = ({
  errors,
  action,
  ...props
}) => (
  <form className={css.wrap} action={action}>
    <Row>
      <Card>
        <Input
          name={FIELD.PLAN_NAME}
          errors={errors?.plan_name}
          placeholder={TEXT.INPUT}
        />
      </Card>
    </Row>
    <div className={css.days}>
      {DAYS.map((day) => (
        <Day errors={errors?.selectErrors?.[day]} key={day} dayName={day} {...props} />
      ))}
    </div>
    <Row className={css.buttons} size={SIZE.LARGE} align={ALIGN.CENTER}>
      <Button size={SIZE.LARGE} href={DASHBOARD_URL}>
        {TEXT.BUTTON.CANCEL}
      </Button>
      <Button size={SIZE.LARGE}>{TEXT.BUTTON.SAVE}</Button>
    </Row>
  </form>
);

export default CreatePlanFormLayout;
