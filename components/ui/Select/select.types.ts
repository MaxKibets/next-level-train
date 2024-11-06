import { Dispatch, SetStateAction } from "react";

import { WithChildrenProps } from "@/types/global";

type ActiveValue = string;

export type SelectProps = WithChildrenProps<{
  name: string;
  placeholder: string;
}>;

export type SelectLayoutProps = SelectProps & {
  activeValue: ActiveValue;
  isOpen: boolean;
  onClick: () => void;
};

export type OptionType = {
  value: string;
};

export type SelectContextType = {
  activeValue: ActiveValue;
  setActiveValue: Dispatch<SetStateAction<string>>;
};
