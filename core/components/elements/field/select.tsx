"use client";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

type Option = {
  id: number;
  name: string;
};

type Props = {
  options: Option[];
};

const Select = ({ options }: Props) => {
  const [selected, setSelected] = useState<Option>({ id: -1, name: "Select" });
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative w-fit">
        <Combobox.Input
          className="clearance rounded border"
          displayValue={(option: Option) => option.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}>
          <Combobox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded bg-white shadow">
            {filteredOptions.length === 0 && query !== "" ? (
              <div className="clearance relative cursor-default select-none text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredOptions.map((person) => (
                <Combobox.Option
                  key={person.id}
                  value={person}
                  className={({ active }) =>
                    ` ${
                      active
                        ? "bg-primary-dark text-primary-light"
                        : "text-primary-dark"
                    } clearance relative cursor-default select-none`
                  }>
                  {({ selected, active }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-bold" : ""
                      }`}>
                      {person.name}
                    </span>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default Select;
