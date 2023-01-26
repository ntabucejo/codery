import Symbol from "@core/components/elements/symbol";
import { MinusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  name?: string;
  profession?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Header = ({ name, profession, onClick }: Props) => {
  return (
    <div className="relative flex w-full items-center space-x-4">
      <div className="flex w-full flex-col leading-tight">
        <div className="grid grid-cols-[1fr,auto] items-center">
          <span className="mr-3 font-semibold  text-primary-dark">{name}</span>
          <div className="flex items-end gap-1">
            <button onClick={onClick}>
              <Symbol Icon={MinusIcon} size="medium" />
            </button>
            <button onClick={onClick}>
              <Symbol Icon={XMarkIcon} size="medium" />
            </button>
          </div>
        </div>
        <span className="text-xs text-gray-600">{profession}</span>
      </div>
    </div>
  );
};

export default Header;
