import Bottom from "@core/components/sections/chat/bottom";
import InboxMessage from "@core/components/sections/chat/inbox-message";
import Message from "@core/components/sections/chat/chat-piece";
import Header from "../../../core/components/sections/chat/header";
import Symbol from "@core/components/elements/symbol";
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import CreateOffer from "@core/components/modals/offer";
import prisma from "@core/libraries/prisma";
import useUser from "@core/hooks/use-user";
import serialize from "@core/utilities/serialize";
import CustomOffer from "@core/components/sections/offer";

type Props = {
  params: {
    username: string;
  };
};

const Chat = async ({ params }: Props) => {
  const user = await useUser({
    where: { username: params.username },
  });

  const freelancer = await prisma.freelancer.findUnique({
    where: { userId: user?.id },
  });

  const gigs = await prisma.gig.findMany({
    where: { freelancerId: freelancer?.id },
    include: {
      category: true,
      thumbnails: true,
      freelancer: {
        include: {
          user: true,
        },
      },
    },
  });

  return (
    <section className="contain space-y-4">
      <div className="flex gap-48">
        <h1 className="text-2xl font-semibold">Chat</h1>
        <div className="flex items-center gap-2">
          <Symbol Icon={MagnifyingGlassIcon} />
          <Symbol Icon={BarsArrowUpIcon} />
          <Symbol Icon={BarsArrowDownIcon} />
        </div>
        <div className="ml-auto">
          <CreateOffer gigs={serialize(gigs)} />
        </div>
      </div>
      <div className="grid grid-cols-[auto,1fr] gap-4">
        <div className="flex h-[700px] flex-col overflow-y-scroll rounded border-l border-r border-t">
          <InboxMessage
            name="Lorem Ipsum"
            message="Lorem ipsum dolor et"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <InboxMessage
            name="Lorem Ipsum"
            message="Lorem ipsum dolor et"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <InboxMessage
            name="Lorem Ipsum"
            message="Lorem ipsum dolor et"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <InboxMessage
            name="Lorem Ipsum"
            message="Lorem ipsum dolor et"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <InboxMessage
            name="Lorem Ipsum"
            message="Lorem ipsum dolor et"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <InboxMessage
            name="Lorem Ipsum"
            message="Lorem ipsum dolor et"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <InboxMessage
            name="Lorem Ipsum"
            message="Lorem ipsum dolor et"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <InboxMessage
            name="Lorem Ipsum"
            message="Lorem ipsum dolor et"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <InboxMessage
            name="Lorem Ipsum"
            message="Lorem ipsum dolor et"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>

        <div className="relative grid h-[700px] w-full grid-rows-[auto,1fr,auto] space-y-4 rounded border p-3">
          <CustomOffer />
          <Header name="Anderson Vanhron" profession="ReactJS Developer" />
          <hr />
          <div
            id="messages"
            className="scrollbar-thumb-primary-dark scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex flex-col space-y-2 overflow-y-auto">
            <Message isLeft>Since we both agreed about the terms.</Message>
            <Message>Yea' sure.</Message>
            <Message isLeft>Since we both agreed about the terms.</Message>
            <Message>Yea' sure.</Message>
            <Message>Yea' sure.</Message>
            <Message>Yea' sure.</Message>
            <Message isLeft>Since we both agreed about the terms.</Message>
            <Message isLeft>Since we both agreed about the terms.</Message>
            <Message>Yea' sure.</Message>
            <Message>Yea' sure.</Message>
            <Message isLeft>Since we both agreed about the terms.</Message>
            <Message>Yea' sure.</Message>
            <Message isLeft>Since we both agreed about the terms.</Message>
            <Message>Yea' sure.</Message>
            <Message>Yea' sure.</Message>
            <Message>Yea' sure.</Message>
            <Message isLeft>Since we both agreed about the terms.</Message>
            <Message isLeft>Since we both agreed about the terms.</Message>
            <Message>Yea' sure.</Message>
            <Message>Yea' sure.</Message>
          </div>
          <hr />
          <Bottom />
        </div>
      </div>
    </section>
  );
};

export default Chat;
