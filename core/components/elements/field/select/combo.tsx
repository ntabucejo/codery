"use client";

import {
  type Dispatch,
  type SetStateAction,
  Fragment,
  useEffect,
  useState,
} from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Symbol from "../../symbol";

type Option = {
  id: string;
  name: string;
};

type Props = {
  options?: Option[];
  value: {
    id: string;
    name: string;
  };
  setValue?: Dispatch<SetStateAction<any>>;
  isDisabled?: boolean;
};

const Combo = ({
  options = [],
  value,
  isDisabled,
  setValue = () => {},
}: Props) => {
  const [selected, setSelected] = useState<Option>(value);
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

  useEffect(() => {
    if (selected) {
      setValue(selected);
    }
  }, [selected]);

  return (
    <Combobox value={selected} onChange={setSelected} disabled={isDisabled}>
      <div className="relative text-sm">
        <Combobox.Input
          className="clearance w-full rounded border"
          placeholder="Select"
          displayValue={(option: Option) => (value ? value.name : option.name)}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <Symbol Icon={ChevronUpDownIcon} size="small" />
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
              filteredOptions.map((option) => (
                <Combobox.Option
                  key={option.id}
                  value={option}
                  className={({ active }) =>
                    `${
                      active
                        ? "bg-primary-dark text-primary-light"
                        : "text-primary-dark"
                    } clearance relative cursor-default select-none`
                  }>
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-bold" : ""
                      }`}>
                      {option.name}
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

export default Combo;
