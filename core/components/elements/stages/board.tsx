"use client";

import { Tab } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Symbol from "../symbol";

type Props = {
  name: string;
  panels: {
    id: number;
    title: string;
    content: JSX.Element;
  }[];
};

const Board = ({ name, panels }: Props) => {
  return (
    <Tab.Group as="div" className="space-y-4">
      <div className="space-y-4 rounded bg-primary-dark p-4">
        <h1 className="text-2xl font-extrabold text-primary-light">{name}</h1>
        <Tab.List className="flex w-full items-center gap-6 overflow-scroll scrollbar-hide">
          {panels.map((panel) => (
            <div key={panel.id} className="flex items-center gap-4">
              <Tab className="smooth flex cursor-pointer items-center gap-2 focus:outline-0">
                {({ selected }) => (
                  <>
                    <div
                      className={`${
                        selected ? "bg-primary-light" : ""
                      } relative flex aspect-square w-7 items-center justify-center rounded-full border text-center font-semibold`}>
                      <div
                        className={`${
                          selected ? "text-primary-dark" : "text-primary-light"
                        }`}>
                        {panel.id}
                      </div>
                      {selected ? (
                        <div className="absolute inset-0 animate-spin rounded-full border-2 border-l-0 border-primary-brand border-b-transparent" />
                      ) : null}
                    </div>
                    <span
                      className={`${
                        !selected ? "text-primary-light/fade" : ""
                      } font-semibold text-primary-light`}>
                      {panel.title}
                    </span>
                  </>
                )}
              </Tab>
              {panels[panels.length - 1].id !== panel.id ? (
                <Symbol
                  Icon={ChevronRightIcon}
                  isHoverDisabled
                  size="small"
                  className="text-white"
                />
              ) : null}
            </div>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels>
        {panels.map((panel) => (
          <Tab.Panel key={panel.title}>{panel.content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Board;
