type Tab = {
  name: string;
  path?: string;
};

export type TabGroupProps = {
  rootPath: string;
  tabs: Tab[];
};

export type TabProps = {
  rootPath: string;
  tab: Tab;
};
