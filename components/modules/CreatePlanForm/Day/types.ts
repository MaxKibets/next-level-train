import { WithChildrenProps } from "@/types/global";
import { ACTION } from "./DayContextProvider";

export type DayProps = {
  dayName: string;
};

type DayContextCommon = {
  categories: string[];
  levels: string[];
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

export type DayContextType = DayContextCommon & {
  dispatch: React.Dispatch<CategoryAction>;
};

export type DayContextProviderProps = WithChildrenProps<DayContextCommon>;
