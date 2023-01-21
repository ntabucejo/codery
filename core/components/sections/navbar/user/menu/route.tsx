"use client";

import Button from "@core/components/elements/button";
import Symbol from "@core/components/elements/symbol";
import { Menu } from "@headlessui/react";

type Props = {
  children: React.ReactNode;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
};

const Route = ({ children, Icon, href }: Props) => {
  return (
    <li>
      <Menu.Item>
        {({ active }) => (
          <button
            className={`${
              active
                ? "bg-primary-dark text-primary-light"
                : "text-primary-dark"
            } smooth flex w-full items-center gap-2 rounded p-2 text-left`}>
            <Symbol
              Icon={Icon}
              isHoverDisabled
              className={`${
                active ? "text-primary-light" : "text-primary-dark"
              }`}
            />
            {children}
          </button>
        )}
      </Menu.Item>
    </li>
  );
};

export default Route;
