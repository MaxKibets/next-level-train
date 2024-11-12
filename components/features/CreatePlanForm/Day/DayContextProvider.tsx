import { createContext, FC, useReducer } from "react";

import { CategoryAction, DayContextProviderProps, DayContextType } from "./types";

export const DayContext = createContext<DayContextType | null>(null);

export const ACTION = {
  CHANGE: "change",
  REMOVE: "remove",
  ADD: "add",
} as const;

const categoriesReducer = (state: string[], action: CategoryAction): string[] => {
  switch (action.type) {
    case ACTION.CHANGE:
      return state.map((categoryFromState) =>
        categoryFromState === action.category ? action.prevCategory : categoryFromState,
      );
    case ACTION.REMOVE:
      return state.filter((category) => category !== action.category);
    case ACTION.ADD:
      return [...state, action.category];
    default:
      return state;
  }
};

const DayContextProvider: FC<DayContextProviderProps> = ({
  errors,
  children,
  categories: categoriesInitial,
  levels,
}) => {
  // Represents unselected cate
  const [categories, dispatch] = useReducer(categoriesReducer, [...categoriesInitial]);

  return (
    <DayContext.Provider value={{ errors, categories, levels, dispatch }}>
      {children}
    </DayContext.Provider>
  );
};

export default DayContextProvider;
