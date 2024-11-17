import { FC, Fragment } from "react";
import cn from "classnames";

import { Card, Heading } from "@/components/ui";
import { HEADING_SIZE, INDENT } from "@/constants/ui";

import { PlanWidgetProps } from "./types";
import css from "./styles.module.css";

const TEXT = {
  NO_ACTIVE_PLAN: "No active plan...",
  CATEGORY: "category",
  LEVEL: "level",
};

const PlanWidgetLayout: FC<PlanWidgetProps> = ({ planData, currentDayName }) => {
  return (
    <Card
      className={css.wrap}
      indention={planData.length ? INDENT.NONE : INDENT.MEDIUM}
      title={
        Boolean(planData.length) && (
          <Heading size={HEADING_SIZE.H4} indention={INDENT.NONE}>
            {planData[0].plan_name}
          </Heading>
        )
      }
    >
      {planData.length ? (
        planData.map((day) => (
          <div key={day.day} className={css.container}>
            <Heading
              className={cn(
                css.cell,
                css.heading,
                currentDayName === day.day && css.active,
              )}
              size={HEADING_SIZE.H4}
              indention={INDENT.NONE}
            >
              <span>{day.day}</span>
            </Heading>
            <div className={cn(css.cell, css.title)}>{TEXT.CATEGORY}</div>
            <div className={cn(css.cell, css.title, css.center)}>{TEXT.LEVEL}</div>
            {JSON.parse(day.plan).map(([category, level]: [string, string]) => (
              <Fragment key={category}>
                <div className={css.cell}>{category}</div>
                <div className={cn(css.cell, css.center)}>{level}</div>
              </Fragment>
            ))}
          </div>
        ))
      ) : (
        <div className={css.stub}>{TEXT.NO_ACTIVE_PLAN}</div>
      )}
    </Card>
  );
};

export default PlanWidgetLayout;
