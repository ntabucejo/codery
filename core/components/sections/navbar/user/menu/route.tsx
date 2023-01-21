"use client";

import Symbol from "@core/components/elements/symbol";
import { Menu } from "@headlessui/react";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
};

const Route = ({ children, Icon, href }: Props) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(href);
  };

  return (
    <li>
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={handleNavigation}
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
