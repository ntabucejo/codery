"use client";

import { Popover, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import Symbol from "../symbol";

type Props = {
  children: React.ReactNode;
};

export const Tooltip = ({ children }: Props) => {
  return (
    <Popover className="relative">
      <Popover.Button className="flex justify-center" tabIndex={-999}>
        <Symbol Icon={QuestionMarkCircleIcon} size="small" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1">
        <Popover.Panel className="absolute bottom-3 left-3 whitespace-nowrap rounded rounded-bl-none bg-primary-brand px-2 py-1 text-sm text-white shadow">
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
export default Tooltip;
