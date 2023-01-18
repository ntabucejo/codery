"use client";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const list = [
  { id: 0, name: "SELECT A CATEGORY", unavailable: false },
  { id: 1, name: "ReactJS", unavailable: false },
  { id: 2, name: "Python", unavailable: false },
  { id: 3, name: "Unity", unavailable: false },
  { id: 4, name: "JavaScript", unavailable: true },
  { id: 5, name: "Ruby", unavailable: false },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(list[0]);

  return (
    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
      <Listbox.Button className="flex items-center rounded border-[1px] border-primary-dark/25 px-4 py-2 text-sm font-semibold text-primary-dark/80">
        <span>{selectedCategory.name}</span>
        <ChevronDownIcon className="ml-auto h-5 w-5" />
      </Listbox.Button>
      <Listbox.Options className="h-40 overflow-scroll rounded border-[1px] border-primary-dark/25">
        {list
          .filter((category) => category.id > 0)
          .map((category) => (
            <Listbox.Option
              key={category.id}
              value={category}
              disabled={category.unavailable}
              className="cursor-pointer py-2 pl-2 hover:bg-primary-dark/5 text-sm">
              {category.name}
            </Listbox.Option>
          ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default Categories;
