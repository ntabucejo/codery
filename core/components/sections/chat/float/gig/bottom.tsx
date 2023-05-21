import Button from "@core/components/elements/button";
import Symbol from "@core/components/elements/symbol";
import { PaperAirplaneIcon, PaperClipIcon } from "@heroicons/react/24/solid";
import React from "react";

const Bottom = () => {
  return (
    <div className="p-3 my-auto flex items-center gap-3">
      <input
        type="text"
        placeholder="Write your message!"
        className="w-full rounded-md bg-gray-200 py-3 pl-3 text-gray-600 placeholder-gray-600 placeholder:text-sm focus:placeholder-gray-400 focus:outline-none"
      />
      <div className="flex items-center gap-2">
        <Symbol Icon={PaperClipIcon} />
        <Button className="border-none bg-transparent enabled:hover:bg-transparent">
          <Symbol Icon={PaperAirplaneIcon} />
        </Button>
      </div>
    </div>
  );
};

export default Bottom;
