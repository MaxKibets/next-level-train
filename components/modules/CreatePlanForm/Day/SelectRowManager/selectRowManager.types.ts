export type SelectRowManagerProps = {
  dayName: string;
  maxRowsCount: number;
};

export type SelectRowManagerLayoutProps = {
  dayName: string;
  showAddButton: boolean;
  rows: string[];
  onRemove: (rowId: string) => void;
  onAddButtonClick: () => void;
};
