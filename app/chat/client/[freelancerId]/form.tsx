"use client";

import { useState } from "react";
import useSWR from "swr";
import { Freelancer, Message as MessageType, User } from "@prisma/client";
import cuid from "cuid";

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
    setText("");
    await fetch(
      `/api/messages?userId=${userId}&freelancerId=${freelancerId}&senderId=${
        user!.id
      }`,
      {
        method: "DELETE",
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
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      <form>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="button" onClick={handleSendMessage}>
          Send Message
        </button>
      </form>
    </>
  );
};

export default Form;