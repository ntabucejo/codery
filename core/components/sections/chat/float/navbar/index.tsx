"use client";
import Button from "@core/components/elements/button";
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
import Link from "next/link";
import { useState } from "react";
import Message from "../gig/message";
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
        <Popover.Panel className="absolute top-10 right-0 z-50 grid h-[400px] w-96 grid-rows-[auto,1fr,auto] overflow-y-scroll rounded border bg-white shadow-xl">
          {/* how many messages */}
          <div className="flex items-center justify-between p-3 border-b ">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Symbol Icon={EnvelopeIcon} size="small" />
              <h4>Inbox</h4>
            </div>

            <Button
              className="w-fit"
              onClick={() => setIsFreelancer(!isFreelancer)}>
              Switch to {isFreelancer ? "Freelancer" : "Client"}
            </Button>
          </div>

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
          <h4 className="smooth ml-auto mt-auto cursor-pointer p-2 text-sm font-semibold text-primary-brand hover:text-primary-brand/fade">
            <Link href="/chat">See All In Inbox</Link>
          </h4>
        </Popover.Panel>
      </Transition.PopDown>
    </Popover>
  );
};

export default Chat;
