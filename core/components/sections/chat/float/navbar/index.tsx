"use client";
import Symbol from "@core/components/elements/symbol";
import Transition from "@core/components/layouts/transition";
import { Popover } from "@headlessui/react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import {
  SpeakerWaveIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { Freelancer, Message as MessageType, User } from "@prisma/client";
import { useState } from "react";
import Message from "../../chat-piece";
import InboxMessage from "./message";

type AsClientMessage = MessageType & {
  freelancer: Freelancer & { user: User };
};

type AsFreelancerMessage = MessageType & { user: User };

type Props = {
  asFreelancerMessages: AsFreelancerMessage[];
  asClientMessages: AsClientMessage[];
};

const Chat = ({ asClientMessages, asFreelancerMessages }: Props) => {
  const [isFreelancer, setIsFreelancer] = useState(false);

  const asFreelancerUniqueMessages = asFreelancerMessages.reduce(
    (unique, message) => {
      const isDuplicate = unique.some((m) => m.id === message.id);

      if (!isDuplicate) {
        unique.push(message);
      }

      return unique;
    },
    [] as AsFreelancerMessage[]
  );

  return (
    <Popover className="relative">
      <Popover.Button className="group flex items-center gap-2 p-2 text-sm font-semibold text-primary-dark/fade outline-none hover:text-primary-dark">
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

          <button onClick={() => setIsFreelancer(!isFreelancer)}>
            Switch to {isFreelancer ? "Freelancer" : "Client"}
          </button>

          {/* messages */}
          {!isFreelancer
            ? asFreelancerUniqueMessages.map((message) => (
                <InboxMessage
                  key={message.id}
                  name={message.user.name!}
                  image={message.user.image!}
                  message={message.text}
                />
              ))
            : asClientMessages.map((message) => (
                <InboxMessage
                  key={message.id}
                  name={message.freelancer.user.name!}
                  image={message.freelancer.user.image!}
                  message={message.text}
                />
              ))}

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
