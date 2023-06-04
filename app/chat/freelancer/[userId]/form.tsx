"use client";

import { useState } from "react";
import useSWR from "swr";
import { Freelancer, Message as MessageType, User } from "@prisma/client";
import cuid from "cuid";

type Props = {
  userId: string;
  freelancerId: string;
};

const Form = ({ userId, freelancerId }: Props) => {
  const [text, setText] = useState("");

  const { data: messages, mutate } = useSWR<
    (MessageType & {
      freelancer: Freelancer;
    })[]
  >(`/api/messages?userId=${userId}&freelancerId=${freelancerId}`, {
    refreshInterval: 1000,
  });

  console.log({ messages });

  const handleSendMessage = async () => {
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
