import { FC } from "react";
import Link from "next/link";
import cn from "classnames";

import { BUTTON_APPEARANCE, SIZE } from "@/constants/global";

import css from "./button.module.css";
import { ButtonProps } from "./button.types";

const Button: FC<ButtonProps> = ({
  href,
  children,
  type,
  size = SIZE.MEDIUM,
  className,
  onClick,
  appearance = BUTTON_APPEARANCE.PRIMARY,
  disabled,
}) => {
  const styles = cn(css.button, className, css[size], css[appearance]);

  return href ? (
    <Link href={href} className={styles} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button className={styles} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
