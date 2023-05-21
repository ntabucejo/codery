import Symbol from "@core/components/elements/symbol";
import { MinusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  name?: string;
  location?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Header = ({ name, location, onClick }: Props) => {
  return (
    <div className="p-1 flex w-full items-start justify-between px-4">
      <div className="flex flex-col">
        <span className="mr-3 font-semibold  text-primary-dark">{name}</span>
        <span className="text-xs text-primary-dark">{location}</span>
      </div>
      <div className="flex items-end gap-1">
        <button onClick={onClick}>
          <Symbol Icon={MinusIcon} size="medium" />
        </button>
        <button onClick={onClick}>
          <Symbol Icon={XMarkIcon} size="medium" />
        </button>
      </div>
    </div>
  );
};

export default Header;
