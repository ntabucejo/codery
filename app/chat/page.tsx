import useUser from "@core/hooks/use-user";
import prisma from "@core/libraries/prisma";
import ChatView from "./chat-view";

const Chat = async () => {
  const user = await useUser();

  const asClientMessages = await prisma.message.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      freelancer: {
        include: {
          user: true,
        },
      },
    },
  });

  const asFreelancerMessages = await prisma.message.findMany({
    where: {
      freelancerId: user?.freelancer?.id,
    },
    include: {
      user: true,
    },
  });

  console.log({ asClientMessages, asFreelancerMessages, user });

  return (
    <div>
      <ChatView
        asClientMessages={asClientMessages}
        asFreelancerMessages={asFreelancerMessages}
      />
    </div>
  );
};

export default Chat;
