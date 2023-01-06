"use client";

import { motion } from "framer-motion";
import type { MouseEventHandler } from "react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  isFull?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  children,
  variant = "primary",
  isFull,
  isDisabled,
  onClick = () => {},
}: Props) => {
  let style = "";

  switch (variant) {
    case "primary": {
      const className =
        "border border-primary-dark bg-primary-dark text-primary-light enabled:hover:border-black enabled:hover:bg-black focus:ring-1";
      style = className;
      break;
    }
    case "secondary": {
      const className =
        "border border-primary-dark enabled:hover:bg-primary-dark enabled:hover:text-primary-light focus:ring-1";
      style = className;
      break;
    }
    case "tertiary": {
      const className =
        "border border-transparent underline-offset-4 enabled:hover:underline";
      style = className;
      break;
    }
    default: {
      style = "no-style";
    }
  }

  return (
    <motion.button
      whileTap={{ scale: 0.99 }}
      disabled={isDisabled}
      onClick={onClick}
      className={`
        ${style}
        ${isFull ? "w-full" : ""}
        whitespace-nowrap rounded px-4 py-2 text-sm font-bold transition-colors duration-150 ease-in-out disabled:opacity-50`}>
      {children}
    </motion.button>
  );
};

export default Button;
