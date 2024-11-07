import { Dispatch, SetStateAction } from "react";

import { WithChildrenProps } from "@/types/global";

type ActiveValue = string;
export type DefaultValue = string;

export type SelectProps = WithChildrenProps<{
  name: string;
  placeholder: string;
  defaultValue?: DefaultValue;
}>;

export type SelectLayoutProps = SelectProps & {
  activeValue: ActiveValue;
  isOpen: boolean;
  onClick: () => void;
};

export type OptionProps = {
  value: string;
  selected?: boolean;
};

export type SelectContextType = {
  activeValue: ActiveValue;
  setActiveValue: Dispatch<SetStateAction<string>>;
};

export type SelectContentProviderProps = WithChildrenProps<{
  defaultValue?: DefaultValue;
}>;
