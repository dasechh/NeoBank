import type React from "react";
import styles from "./button.module.scss";

interface iButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "newsletter";
  size?: "sm" | "md" | "lg" | "default";
}

export default function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: iButtonProps) {
  const classes =
    `${styles.btn || ""} ${styles[`btn--${variant}`] || ""} ${styles[`btn--${size}`] || ""} ${className || ""}`.trim();
  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
}
