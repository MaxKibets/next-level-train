"use client";
import { FC } from "react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import cn from "classnames";

import { TabProps } from "./types";
import css from "./styles.module.css";

const Tab: FC<TabProps> = ({ rootPath, tab = { path: "" } }) => {
  const segments = useSelectedLayoutSegments();
  const currentPath = segments.join("/");
  const [, ...restSegments] = segments;
  const path = [tab.path, ...restSegments].join("/");
  const href = restSegments ? `${rootPath}/${path}` : rootPath;

  const isActive = (!path && currentPath === "") || currentPath === path;

  return (
    <Link className={cn(css.tab, isActive && css.active)} href={href}>
      {tab.name}
    </Link>
  );
};

export default Tab;
