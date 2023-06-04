"use client";

import { useState } from "react";
import useSWR from "swr";
import { Freelancer, Message as MessageType, User } from "@prisma/client";
import cuid from "cuid";
import Button from "@core/components/elements/button";
import Symbol from "@core/components/elements/symbol";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

type Props = {
  user:
    | (User & {
        freelancer: Freelancer | null;
      })
    | null;
  userId: string;
  freelancerId: string;
};

const Form = ({ user, userId, freelancerId }: Props) => {
  const [text, setText] = useState("");

  const { data: messages, mutate } = useSWR<
    (MessageType & {
      freelancer: Freelancer;
    })[]
  >(`/api/messages?userId=${userId}&freelancerId=${freelancerId}`, {
    refreshInterval: 1000,
  });

  const handleSendMessage = async () => {
    if (!text) return;
    setText("");
    await fetch(`/api/messages?userId=${userId}&freelancerId=${freelancerId}`, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
    });
    mutate();
  };

  if (!messages) return null;

  return (
    <div className="grid w-full grid-rows-[1fr,auto] gap-5 p-3">
      <ul className="flex h-96 flex-col gap-1 overflow-y-scroll">
        {messages.map((message) => (
          <li
            key={message.id}
            className={`w-fit rounded-md px-4 py-2 text-sm shadow ${
              message.freelancer.userId === user?.id
                ? "bg-black text-white"
                : "text-red-500"
            }`}>
            {message.text}
          </li>
        ))}
      </ul>
      <form className="my-auto flex items-center gap-3">
        <input
          type="text"
          value={text}
          placeholder="Type Here ..."
          className="w-full rounded-md bg-gray-200 py-3 pl-3 text-gray-600 placeholder-gray-600 placeholder:text-sm focus:placeholder-gray-400 focus:outline-none"
          onChange={(event) => setText(event.target.value)}
        />

        <div className="flex items-center gap-2">
          {/* {user.id === gig.freelancer.user.id ? (
              <CreateOffer user={user} gig={gig} />
            ) : null} */}
          <Button
            onClick={handleSendMessage}
            className="border-none bg-transparent enabled:hover:bg-transparent">
            <Symbol Icon={PaperAirplaneIcon} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
