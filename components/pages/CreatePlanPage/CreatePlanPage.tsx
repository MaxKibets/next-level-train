import { Button, Card, Heading, Row, Select, Option } from "@/components/ui";

import css from "./createPlanPage.module.css";
import { ALIGN, HEADING_SIZE, SIZE } from "@/constants/global";
import { DASHBOARD_URL } from "@/constants/routes";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CreatePlanPage = () => (
  <Row size={SIZE.LARGE}>
    <Heading size={HEADING_SIZE.H2} inverse>
      Create a new weekly plan
    </Heading>
    <form className={css.grid}>
      {DAYS.map((day) => (
        <Card key={day}>
          <Heading size={HEADING_SIZE.H4}>{day}</Heading>
          <Select name="plan_monday" placeholder="training type">
            <Option value="pullups" />
            <Option value="pushups" />
            <Option value="bridges" />
            <Option value="leg_raises" />
            <Option value="handstand_pushups" />
          </Select>
          <Select name="plan_monday" placeholder="level" defaultValue="1">
            <Option value="1" />
            <Option value="2" />
            <Option value="3" />
            <Option value="4" />
            <Option value="5" />
            <Option value="6" />
            <Option value="7" />
            <Option value="8" />
            <Option value="9" />
            <Option value="10" />
          </Select>
        </Card>
      ))}
    </form>
    <Row size={SIZE.LARGE} align={ALIGN.CENTER}>
      <Button size={SIZE.LARGE} href={DASHBOARD_URL}>
        Cancel
      </Button>
      <Button size={SIZE.LARGE}>Save</Button>
    </Row>
  </Row>
);

export default CreatePlanPage;
