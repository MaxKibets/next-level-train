import { Dispatch, SetStateAction } from "react";

import { WithChildrenProps } from "@/types/global";

type ActiveValue = string;

export type OnChange = ({
  prevValue,
  value,
}: {
  prevValue: string;
  value: string;
}) => void;

export type DefaultValue = string;

export type SelectProps = WithChildrenProps<{
  className?: string;
  name: string;
  placeholder?: string;
  defaultValue?: DefaultValue;
  onSelectChange?: OnChange;
  errors?: React.ReactNode;
}>;

export type SelectLayoutProps = SelectProps & {
  activeValue: ActiveValue;
  isOpen: boolean;
  onClick: () => void;
  errors?: React.ReactNode;
};

export type OptionProps = {
  value: string;
  selected?: boolean;
};

export type SelectContextType = {
  activeValue: ActiveValue;
  setActiveValue: Dispatch<SetStateAction<string>>;
  onSelectChange?: OnChange;
};

export type SelectContentProviderProps = WithChildrenProps<{
  defaultValue?: DefaultValue;
  onSelectChange?: OnChange;
}>;
