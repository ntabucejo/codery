import useUser from "@core/hooks/use-user";
import prisma from "@core/libraries/prisma";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const ChatLayout = async ({ children }: Props) => {
  const user = await useUser();

  const asClientMessages = await prisma.message.findMany({
    where: {
      userId: user?.id ?? "!",
    },
    include: {
      user: true,
      freelancer: {
        include: {
          user: true,
        },
      },
    },
  });

  const asFreelancerMessages = await prisma.message.findMany({
    where: {
      freelancerId: user?.freelancer?.id ?? "!", // Best solution in the world
    },
    include: {
      user: true,
      freelancer: {
        include: {
          user: true,
        },
      },
    },
  });

  console.log({ asFreelancerMessages });

  const groupAsClientMessages = () => {
    let groupedMessages: typeof asClientMessages = [];
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
    <div className="contain flex gap-4">
      <div className="w-52">
        <ul className="cursor-pointer border-b p-2 hover:bg-slate-100">
          {groupAsClientMessages().map((message) => (
            <li key={message.id}>
              <Link href={`/chat/client/${message.freelancer.id}`}>
                {message.freelancer.user.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="cursor-pointer border-b p-2 hover:bg-slate-100">
          {groupAsFreelancerMessages().map((message) => (
            <div key={message.id}>
              <Link href={`/chat/freelancer/${message.userId}`}>
                <span>{message.user.name}</span>
              </Link>
            </div>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
};

export default ChatLayout;
