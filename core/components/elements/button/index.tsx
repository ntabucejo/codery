"use client";

import { motion } from "framer-motion";
import type { MouseEventHandler } from "react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "icon";
  isFull?: boolean;
  isDisabled?: boolean;
  onClick?: any
  className?: string;
  type?: "button" | "submit";
};

const Button = ({
  children,
  variant = "primary",
  isFull,
  isDisabled,
  onClick = () => {},
  className,
  type = "button",
}: Props) => {
  let style = "";

  switch (variant) {
    case "primary": {
      const className =
        "border border-primary-dark bg-primary-dark text-primary-light enabled:hover:border-black enabled:hover:bg-black focus:ring-1 clearance disabled:bg-primary-dark/fade disabled:border-primary-dark/fade";
      style = className;
      break;
    }
    case "secondary": {
      const className =
        "border border-primary-dark enabled:hover:bg-primary-dark enabled:hover:text-primary-light focus:ring-1 clearance";
      style = className;
      break;
    }
    case "tertiary": {
      const className = "p-2 text-primary-dark/fade hover:text-primary-dark";
      style = className;
      break;
    }
    case "quaternary": {
      const className =
        "border border-transparent underline-offset-2 enabled:hover:underline clearance";
      style = className;
      break;
    }
    default: {
      style = "no-style";
    }
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
      className={`
        ${style}
        ${isFull ? "flex w-full justify-center" : ""}
        ${className ? className : ""}
        smooth group flex items-center gap-2 whitespace-nowrap rounded text-sm font-bold transition-colors`}>
      {children}
    </motion.button>
  );
};

export default Button;
