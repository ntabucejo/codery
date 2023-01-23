import Button from "@core/components/elements/button";
import Symbol from "@core/components/elements/symbol";
import { Popover, Transition } from "@headlessui/react";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { SpeakerWaveIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import Message from "../message";

const Chat = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="group flex items-center gap-2 p-2 text-sm font-semibold text-primary-dark/fade hover:text-primary-dark">
        <Symbol
          Icon={ChatBubbleLeftRightIcon}
          className="text-primary-dark/fade group-hover:text-primary-dark"
        />
        Messages
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1">
        <Popover.Panel className="absolute top-10 right-0 z-50 grid h-[400px] w-96 grid-rows-[auto,1fr,auto] rounded border bg-white shadow-xl">
          {/* how many messages */}
          <div className="flex items-center gap-2 border-b p-3 text-sm font-semibold">
            <Symbol Icon={EnvelopeIcon} size="small" />
            <h4>
              Inbox<span> (4)</span>
            </h4>
          </div>

          {/* messages */}
          <div className="h-auto overflow-y-scroll">
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
          {/* see all inbox */}
          <div className="flex w-full items-center justify-between border-t p-3 text-right">
            <div className="flex items-center gap-1">
              <Symbol Icon={SpeakerWaveIcon} size="small" />
              <Symbol Icon={Cog6ToothIcon} size="small" />
            </div>
            <h4 className="text-sm font-semibold text-primary-brand">
              See All In Inbox
            </h4>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Chat;
