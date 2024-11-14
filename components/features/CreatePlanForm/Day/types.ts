import { WithChildrenProps } from "@/types/global";
import { ACTION } from "./DayContextProvider";
import { FormErrors } from "@/types/form";

type DayCommon = {
  categories: string[];
  levels: string[];
  errors: { [id: string]: FormErrors } | undefined;
};

type ChangeAction = {
  type: typeof ACTION.CHANGE;
  category: string;
  prevCategory: string;
};

type RemoveAction = {
  type: typeof ACTION.REMOVE;
  category: string;
};

type AddAction = {
  type: typeof ACTION.ADD;
  category: string;
};

export type CategoryAction = ChangeAction | RemoveAction | AddAction;

export type DayProps = DayCommon & {
  dayName: string;
};

export type DayContextType = DayCommon & {
  dispatch: React.Dispatch<CategoryAction>;
};

export type DayContextProviderProps = WithChildrenProps<DayCommon>;

export type DayInnerProps = {
  dayName: string;
  maxRowsCount: number;
};

export type DayLayoutProps = {
  dayName: string;
  showAddButton: boolean;
  rows: string[];
  onRemove: (rowId: string) => void;
  onAddButtonClick: () => void;
};
