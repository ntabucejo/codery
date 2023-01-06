"use client";

import Symbol from "@core/components/elements/symbol";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

const Search = () => {
  const ref = useRef<any>(null);

  const handleSetFocus = () => {
    ref.current!.focus();
  };

  return (
    <div
      onClick={handleSetFocus}
      className={`clearance flex w-full items-center gap-2 overflow-hidden rounded border bg-white`}>
      <Symbol Icon={MagnifyingGlassIcon} isHoverDisabled />
      <input
        ref={ref}
        type="text"
        placeholder="Search here..."
        className="w-full bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default Search;
