"use client";
import { Tab } from "@headlessui/react";
import React from "react";
import Overview from "./overview";

const panels = [
  { title: "Overview", content: <Overview /> },
  { title: "Pricing", content: "Content 2" },
  { title: "Description", content: "Content 3" },
  { title: "Requirements", content: "Content 4" },
  { title: "Gallery", content: "Content 5" },
  { title: "Publish", content: "Content 6" },
];

const CreateGig = () => {
  return (
    <div className="contain grid gap-8">
      <Tab.Group>
        <Tab.List className="flex items-center overflow-scroll scrollbar-hide gap-4">
          {panels.map((panel) => (
            <Tab
              key={panel.title}
              className="cursor-pointer outline-none smooth hover:font-medium">
              {panel.title}
            </Tab>
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