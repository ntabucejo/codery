'use client'
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Content from "./content";

type Props = {
  children: React.ReactNode;
};

const Tooltip = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <QuestionMarkCircleIcon
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="h-5 w-5 cursor-pointer text-primary-dark/40"
      />

      {open && <Content children={children}></Content>}
    </div>
  );
};

export default Tooltip;
