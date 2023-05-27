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
  const [showClientMessages, setShowClientMessages] = useState(true);

  return (
    <div>
      {asFreelancerMessages.map((message) => (
        <div>{message.user.email}</div>
      ))}

      {asClientMessages.map((message) => (
        <div>{message.freelancer.user.email}</div>
      ))}
    </div>
  );
};

export default ChatView;
