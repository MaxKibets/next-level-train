import PlanWidget from "@/components/features/PlanWidget";
import { Heading, Row } from "@/components/ui";
import { ALIGN, HEADING_SIZE, SIZE } from "@/constants/ui";

const DashboardPage = () => {
  return (
    <>
      <Row size={SIZE.LARGE} align={ALIGN.CENTER}>
        <Heading size={HEADING_SIZE.H3}>Dashboard</Heading>
      </Row>
      <PlanWidget />
    </>
  );
};

export default DashboardPage;
