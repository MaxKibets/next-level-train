import CreatePlanForm from "@/components/modules/CreatePlanForm";
import { Heading, Row } from "@/components/ui";
import { HEADING_SIZE, SIZE } from "@/constants/ui";

const CreatePlanPage = () => (
  <Row size={SIZE.LARGE}>
    <Heading size={HEADING_SIZE.H2} inverse>
      Create a new weekly plan
    </Heading>
    <CreatePlanForm />
  </Row>
);

export default CreatePlanPage;
