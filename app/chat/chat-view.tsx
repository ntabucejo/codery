"use client";

import { Freelancer, Message as MessageType, User } from "@prisma/client";
import { useState } from "react";

type AsClientMessage = MessageType & {
  freelancer: Freelancer & { user: User };
};

type AsFreelancerMessage = MessageType & { user: User };

type Props = {
  asFreelancerMessages: AsFreelancerMessage[];
  asClientMessages: AsClientMessage[];
};

const ChatView = ({ asFreelancerMessages, asClientMessages }: Props) => {
  const [selectedMessage, setSelectedMessage] = useState({
    name: "",
    text: "",
  });

  return (
    <div className="contain flex items-center">
      <div className="mr-4 flex flex-col border-r border-primary-dark px-2">
        {asFreelancerMessages.map((message) => (
          <div
            key={message.id}
            className="cursor-pointer"
            onClick={() =>
              setSelectedMessage({
                ...selectedMessage,
                name: message.user.name!,
                text: message.text,
              })
            }>
            {message.user.name}
          </div>
        ))}

        {asClientMessages.map((message) => (
          <div>{message.freelancer.user.name}</div>
        ))}
      </div>

      <div className="flex flex-col">
        <p>{selectedMessage.name}</p>
        <p>{selectedMessage.text}</p>
      </div>
    </div>
  );
};

export default ChatView;
