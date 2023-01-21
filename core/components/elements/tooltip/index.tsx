"use client";

import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Symbol from "../symbol";
import Content from "./content";

type Props = {
  children: React.ReactNode;
};

const Tooltip = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}>
        <Symbol Icon={QuestionMarkCircleIcon} size="small" />
      </div>
      {open && <Content children={children}></Content>}
    </div>
  );
};

export default Tooltip;
