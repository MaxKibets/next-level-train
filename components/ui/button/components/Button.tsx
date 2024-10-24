import React from "react";
import Link from "next/link";

import css from "../styles/button.module.css";

type ButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  disabled?: boolean;
};

const Button = ({
  href,
  children,
  type,
  className,
  onClick,
  secondary,
  disabled,
}: ButtonProps) => {
  const styles = `${css.button} ${className} ${secondary ? css.secondary : css.primary}`;

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
