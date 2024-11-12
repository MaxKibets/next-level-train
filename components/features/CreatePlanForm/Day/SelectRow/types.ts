import { OnChange } from "@/components/ui/Select/types";

type SelectRowCommonProps = {
  dayName: string;
  rowId: string;
};

export type SelectRowLayoutProps = SelectRowCommonProps & {
  onChangeCategory: OnChange;
  onRemoveButtonClick: () => void;
};

export type SelectRowProps = SelectRowCommonProps & {
  onRemove: (rowId: string) => void;
};

export type ChangeCategoryProps = {
  prevValue: string;
  value: string;
};

export type SelectRowErrorProps = { rowId: string; forSelect: string };
