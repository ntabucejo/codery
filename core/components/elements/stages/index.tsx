"use client";

import { Tab } from "@headlessui/react";

type Props = {
  panels: {
    id: number;
    title: string;
    content: JSX.Element;
  }[];
};

const Stages = ({ panels }: Props) => {
  return (
    <Tab.Group as="section" className="space-y-4">
      <Tab.List className="clearance flex w-full items-center gap-6 overflow-scroll rounded bg-primary-dark scrollbar-hide">
        {panels.map((panel) => (
          <>
            <Tab
              key={panel.id}
              className="smooth flex cursor-pointer items-center gap-2 active:outline-pink-500">
              {({ selected }) => (
                <>
                  <div
                    className={`${
                      selected ? "bg-primary-light" : ""
                    } flex aspect-square w-8 items-center justify-center rounded-full border text-center font-semibold`}>
                    <div
                      className={`${
                        selected ? "text-primary-dark" : "text-primary-light"
                      }`}>
                      {panel.id}
                    </div>
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
              <div className="h-[1px] w-24 bg-primary-light/fade" />
            ) : null}
          </>
        ))}
      </Tab.List>
      <Tab.Panels>
        {panels.map((panel) => (
          <Tab.Panel key={panel.title}>{panel.content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Stages;
