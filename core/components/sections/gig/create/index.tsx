"use client";

import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import Gallery from "./gallery";
import Overview from "./overview";

const panels = [
  { id: 1, title: "Overview", content: <Overview /> },
  { id: 2, title: "Gallery", content: <Gallery/> },
  { id: 3, title: "Publish", content: "Content 6" },
];

const CreateGig = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="contain my-4 grid gap-8">
      <Tab.Group>
        <Tab.List className="flex items-center gap-6 overflow-scroll scrollbar-hide">
          {panels.map((panel) => (
            <div key={panel.id} onClick={() => setCurrentStep(panel.id)}>
              <div className="group flex cursor-pointer items-center gap-2">
                <div
                  className={`${
                    panel.id === currentStep ? "bg-primary-dark text-white" : ""
                  } rounded-full border-2 p-1 px-3 font-semibold`}>
                  {panel.id}
                </div>
                <Tab
                  key={panel.title}
                  className="smooth cursor-pointer font-medium outline-none">
                  {panel.title}
                </Tab>
                {panel.title !== "Publish" ? (
                  <hr className="h-[1px] w-10 bg-gray-700 tablet:w-36" />
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </Tab.List>
        <Tab.Panels>
          {panels.map((panel) => (
            <Tab.Panel key={panel.title} className="font-semibold outline-none">
              {panel.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default CreateGig;
