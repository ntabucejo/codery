import Avatar from "@core/components/elements/avatar";
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
        <ul>
          {groupAsClientMessages().map((message) => (
            <div
              key={message.id}
              className="cursor-pointer border-b p-2 hover:bg-slate-100">
              <Link
                href={`/chat/client/${message.freelancer.id}`}
                className="flex items-center gap-2">
                <Avatar
                  src={message.freelancer.user.image!}
                  alt="sender image"
                  size="small"
                />
                <h1>{message.freelancer.user.name}</h1>
              </Link>
            </div>
          ))}
        </ul>
        <ul>
          {groupAsFreelancerMessages().map((message) => (
            <div
              key={message.id}
              className="cursor-pointer border-b p-2 hover:bg-slate-100">
              <Link
                href={`/chat/freelancer/${message.userId}`}
                className="flex items-center gap-2">
                <Avatar
                  src={message.user.image!}
                  alt="sender image"
                  size="small"
                />
                <h1>{message.user.name}</h1>
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
