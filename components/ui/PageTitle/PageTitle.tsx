import { FC } from "react";

import { ALIGN, HEADING_SIZE, SIZE } from "@/constants/ui";

import Row from "../Row/Row";
import Heading from "../Heading/Heading";

const PageTitle: FC<{ title: string }> = ({ title }) => (
  <Row align={ALIGN.CENTER} size={SIZE.LARGE}>
    <Heading size={HEADING_SIZE.H3} inverse>
      {title}
    </Heading>
  </Row>
);

export default PageTitle;
