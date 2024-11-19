import { ReactNode } from "react";

import { getLevels } from "@/lib/db/exercises";
import { Card, TabGroup } from "@/components/ui";
import { EXERCISES_URL } from "@/constants/routes";

const CategoryLayout = ({ children, params: { category } }: { children: ReactNode }) => {
  const levels = getLevels(category);

  const tabs = levels.map((level) => ({
    name: String(level),
    path: String(level),
  }));

  return (
    <>
      <TabGroup rootPath={`${EXERCISES_URL}/${category}`} tabs={tabs} />
      <Card>{children}</Card>
    </>
  );
};

export default CategoryLayout;
