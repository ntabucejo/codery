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
  freelancer:
    | (Freelancer & {
        user: User;
      })
    | null;
};

const Form = ({ user, userId, freelancerId, freelancer }: Props) => {
  const [text, setText] = useState("");

  const { data: messages, mutate } = useSWR<
    (MessageType & {
      freelancer: Freelancer;
      sender: User;
    })[]
  >(`/api/messages?userId=${userId}&freelancerId=${freelancerId}`, {
    refreshInterval: 1000,
  });

  const handleSendMessage = async () => {
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
    <>
      <div className="grid w-full grid-rows-[auto,1fr,auto] gap-5 p-3">
        <div className="flex flex-col border-b p-3">
          <h1 className=" font-bold">{freelancer?.user.name}</h1>
          <h1 className="text-xs">{freelancer?.user.email}</h1>
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
            <Button
              onClick={handleSendMessage}
              className="border-none bg-transparent enabled:hover:bg-transparent">
              <Symbol Icon={PaperAirplaneIcon} />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
