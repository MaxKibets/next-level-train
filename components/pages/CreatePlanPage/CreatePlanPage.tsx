import { Button, Card, Heading, Input, Row } from "@/components/ui";

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
          <Input type="text" placeholder="training" />
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
