import { ReactNode } from "react";

import { getCategories } from "@/lib/db/exercises";
import { Card, Heading, Row } from "@/components/ui";
import { ALIGN, HEADING_SIZE, SIZE } from "@/constants/ui";
import ExercisesTabs from "@/components/features/ExercisesTabs";

const ExercisesLayout = ({ children }: { children: ReactNode }) => {
  const categories = getCategories();

  return (
    <>
      <Row size={SIZE.LARGE} align={ALIGN.CENTER}>
        <Heading size={HEADING_SIZE.H3}>Exercises</Heading>
      </Row>
      <div>
        <ExercisesTabs categories={categories} />
        <Card>{children}</Card>
      </div>
    </>
  );
};

export default ExercisesLayout;
