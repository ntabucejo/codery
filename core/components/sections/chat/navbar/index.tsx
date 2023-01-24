import Symbol from "@core/components/elements/symbol";
import Transition from "@core/components/layouts/transition";
import { Popover } from "@headlessui/react";
import {
  ChatBubbleLeftRightIcon,
  
} from "@heroicons/react/24/outline";
import { SpeakerWaveIcon, Cog6ToothIcon,EnvelopeIcon,} from "@heroicons/react/24/solid";
import InboxMessage from "./inbox-message";

const Chat = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="group flex items-center gap-2 p-2 outline-none text-sm font-semibold text-primary-dark/fade hover:text-primary-dark">
        <Symbol
          Icon={ChatBubbleLeftRightIcon}
          className="text-primary-dark/fade group-hover:text-primary-dark"
        />
        Messages
      </Popover.Button>

      <Transition.PopDown>
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
            <InboxMessage
              name="Lorem Ipsum"
              message="Hi"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <InboxMessage
              name="Lorem Ipsum"
              message="Lorem ipsum dolor et"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <InboxMessage
              name="Lorem Ipsum"
              message="Lorem ipsum dolor et"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
          </div>

          {/* see all inbox */}
          <div className="flex w-full items-center justify-between border-t p-3 text-right">
            <div className="flex items-center gap-1">
              <Symbol Icon={SpeakerWaveIcon} size="small" />
              <Symbol Icon={Cog6ToothIcon} size="small" />
            </div>
            <h4 className="smooth cursor-pointer text-sm font-semibold text-primary-brand hover:text-primary-brand/fade">
              See All In Inbox
            </h4>
          </div>
        </Popover.Panel>
      </Transition.PopDown>
    </Popover>
  );
};

export default Chat;
