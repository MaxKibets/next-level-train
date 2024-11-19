import { FC } from "react";

import Tab from "./Tab";
import { TabGroupProps } from "./types";
import css from "./styles.module.css";

const TabGroup: FC<TabGroupProps> = ({ tabs, ...rest }) => {
  return (
    <div className={css.wrap}>
      {tabs.map((tab) => (
        <Tab key={tab.name} tab={tab} {...rest} />
      ))}
    </div>
  );
};

export default TabGroup;
