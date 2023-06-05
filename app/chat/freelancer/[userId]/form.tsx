"use client";

import { useState } from "react";
import useSWR from "swr";
import { Freelancer, Gig, Message as MessageType, User } from "@prisma/client";
import Button from "@core/components/elements/button";
import Symbol from "@core/components/elements/symbol";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import CreateOffer from "@core/components/modals/offer";

type Props = {
  gigs: Gig[];
  user:
    | (User & {
        freelancer: Freelancer | null;
      })
    | null;
  userId: string;
  freelancerId: string;
  client: User | null;
};

const Form = ({ user, userId, client, gigs, freelancerId }: Props) => {
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
    await fetch(
      `/api/messages?userId=${userId}&freelancerId=${freelancerId}&senderId=${
        user!.id
      }`,
      {
        method: "POST",
        body: JSON.stringify({
          text,
        }),
      }
    );
    mutate();
  };

  if (!messages) return null;

  return (
    <div className="grid w-full grid-rows-[auto,1fr,auto] gap-5 p-3">
      <div className="border-b p-3">
        <h1 className=" font-bold">{client?.name}</h1>
        <h1 className="text-xs">{client?.email}</h1>
      </div>
      <ul className="flex h-96 flex-col gap-1 overflow-y-scroll pr-3">
        {messages.map((message) => (
          <li
            key={message.id}
            className={`w-fit rounded-md px-4 py-2 text-sm shadow ${
              message.senderId !== user?.id
                ? "bg-gray-200"
                : "ml-auto bg-primary-brand text-white"
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
          <CreateOffer client={client!} gigs={gigs} />
          <Button
            type="button"
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
