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
  user: User;
  freelancer: Freelancer & {
    user: User;
  };
};

type AsFreelancerMessage = MessageType & { user: User };

type Props = {
  asFreelancerMessages: AsFreelancerMessage[];
  asClientMessages: AsClientMessage[];
};

const Chat = ({ asClientMessages, asFreelancerMessages }: Props) => {
  const [isFreelancer, setIsFreelancer] = useState(false);

  const groupAsClientMessages = () => {
    let groupedMessages: AsClientMessage[] = [];
    for (const message of asClientMessages) {
      let freelancerId = message.freelancerId;
      if (
        groupedMessages.find((message) => message.freelancerId === freelancerId)
      )
        continue;
      groupedMessages = [...groupedMessages, message];
    }

    return groupedMessages;
  };

  const groupAsFreelancerMessages = () => {
    let groupedMessages: typeof asFreelancerMessages = [];
    for (const message of asFreelancerMessages) {
      let userId = message.userId;
      if (groupedMessages.find((message) => message.user.id === userId))
        continue;
      groupedMessages = [...groupedMessages, message];
    }

    return groupedMessages;
  };

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
          <div className="flex items-center justify-between border-b p-3 ">
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
          <section className="flex flex-col">
            {!isFreelancer
              ? groupAsFreelancerMessages().map((message) => (
                  <Link href={`chat/freelancer/${message.userId}`}>
                    <InboxMessage
                      key={message.id}
                      name={message.user.name!}
                      image={message.user.image!}
                      message={message.text}
                    />
                  </Link>
                ))
              : groupAsClientMessages().map((message) => (
                  <Link href={`chat/client/${message.freelancerId}`}>
                    <InboxMessage
                      key={message.id}
                      name={message.freelancer.user.name!}
                      image={message.freelancer.user.image!}
                      message={message.text}
                    />
                  </Link>
                ))}
          </section>
        </Popover.Panel>
      </Transition.PopDown>
    </Popover>
  );
};

export default Chat;
