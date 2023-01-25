"use client";

import {
  type Dispatch,
  Fragment,
  type SetStateAction,
  useState,
  useEffect,
} from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Symbol from "../../symbol";

type Option = {
  id: string;
  name: string;
};

type Props = {
  options: Option[];
  value: {
    id: string;
    name: string;
  };
  setValue: Dispatch<SetStateAction<any>>;
};

const List = ({ options, value, setValue }: Props) => {
  const [selected, setSelected] = useState<Option>(value);
  const isInitial = !selected?.name;

  useEffect(() => {
    if (selected) {
      setValue(selected);
    }
  }, [selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative text-sm">
        <Listbox.Button className="clearance w-full rounded border bg-white text-left ">
          <span
            className={`${isInitial ? "text-gray-400" : ""} block truncate`}>
            {isInitial ? "Select" : selected.name}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <Symbol Icon={ChevronUpDownIcon} size="small" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded bg-white shadow">
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                className={({ active }) =>
                  `${
                    active
                      ? "bg-primary-dark text-primary-light"
                      : "text-primary-dark"
                  } clearance relative cursor-default select-none`
                }
                value={option}>
                {({ selected }) => (
                  <span
                    className={`block truncate ${selected ? "font-bold" : ""}`}>
                    {option.name}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default List;
