"use client";

import { FC } from "react";

import { TabGroup } from "@/components/ui";
import { EXERCISES_URL } from "@/constants/routes";

const ExercisesTabs: FC<{ categories: string[] }> = ({ categories }) => {
  const tabs = categories.map((category) => ({
    name: category,
    path: category,
  }));

  return <TabGroup rootPath={EXERCISES_URL} tabs={tabs} />;
};

export default ExercisesTabs;
