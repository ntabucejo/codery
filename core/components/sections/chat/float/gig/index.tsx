"use client";
import Button from "@core/components/elements/button";
import Symbol from "@core/components/elements/symbol";
import Transition from "@core/components/layouts/transition";
import {
  ChatBubbleLeftRightIcon,
  MinusIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import GreetMessage from "./greet-message";
import Message from "./message";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import Image from "next/image";
import {
  Freelancer,
  Gig,
  Message as MessageType,
  Thumbnail,
  User,
} from "@prisma/client";
import cuid from "cuid";

type Props = {
  user: User & {
    freelancer: Freelancer | null;
  };
  gig: Gig & {
    thumbnails: Thumbnail[];
    freelancer: Freelancer & {
      user: User;
    };
  };
};

const Chat = ({ user, gig }: Props) => {
  const [openChat, setOpenChat] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [fields, setFields] = useState({
    text: "",
  });
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const chat = searchParams.get("chat");

  const { data: messages, mutate } = useSWR<
    (MessageType & { freelancer?: Freelancer })[]
  >(`/api/messages?userId=${user.id}&freelancerId=${gig.freelancerId}`, {
    refreshInterval: 1000,
  });

  useEffect(() => {
    setOpenMessage(true);
  }, []);

  useEffect(() => {
    if (!chat) return;
    setOpenChat(Number(chat) ? true : false);
  }, [pathname, chat]);

  const handleOpenChat = () => {
    setOpenChat(!openChat);
    const params = new URLSearchParams();
    params.set("chat", chat === "1" ? "0" : "1");
    const chatPathname = pathname?.split("chat=1").join("").split("chat=0");
    router.replace(`${chatPathname}?${params}`);
  };

  const handleSendChat = async () => {
    if (user.id === gig.freelancer.userId) return;
    const sender =
      user.id === gig.freelancer.userId ? gig.freelancerId : user.id;
    mutate(
      [
        ...messages!,
        {
          id: cuid(),
          userId: sender,
          freelancerId: gig.freelancerId,
          text: fields.text,
          senderId: user.id,
        },
      ],
      { revalidate: false }
    );
    await fetch(
      `/api/messages?userId=${user.id}&freelancerId=${gig.freelancerId}&senderId=${user.id}`,
      {
        method: "POST",
        body: JSON.stringify({ text: fields.text }),
      }
    );
    mutate();
    setFields({ text: "" });
  };

  return (
    <div className="fixed bottom-10 right-20 z-[9999] ">
      {/* chat icon */}
      <Button
        className="animate-shake py-3"
        onClick={() => {
          handleOpenChat();
        }}>
        <Symbol
          Icon={ChatBubbleLeftRightIcon}
          size="medium"
          className="font-semibold text-primary-light"
        />
      </Button>

      {/* greet message */}
      <GreetMessage show={openMessage}>Hi! How can I help you?</GreetMessage>

      {/* chat floated */}
      {openChat && (
        <Transition.Fade show={openChat}>
          <div className="absolute bottom-0 right-[73px] grid h-[500px] w-96 grid-rows-[auto,auto,1fr,auto] rounded bg-white shadow-md">
            <div className="flex w-full items-start justify-between p-1 px-4">
              <div className="flex flex-col">
                <span className="mr-3 font-semibold  text-primary-dark">
                  {gig.freelancer.user.name!}
                </span>
                <span className="text-xs text-primary-dark">
                  {gig.freelancer.user.location!}
                </span>
              </div>
              <div className="flex items-end gap-1">
                <button onClick={() => handleOpenChat()}>
                  <Symbol Icon={MinusIcon} size="medium" />
                </button>
                <button onClick={() => handleOpenChat()}>
                  <Symbol Icon={XMarkIcon} size="medium" />
                </button>
              </div>
            </div>

            {/* gig */}
            <div className="my-2 flex items-center gap-5 border bg-slate-200 px-4">
              <div className="relative h-14 w-14">
                <Image
                  src={gig.thumbnails[0].image}
                  alt={gig.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Gig Order:</span>
                {/* @ts-ignore */}
                <marquee className="w-full truncate text-sm font-semibold">
                  {gig.title}
                  {/* @ts-ignore */}
                </marquee>
              </div>
            </div>

            {/* messages */}
            <div className="flex flex-col gap-1 overflow-y-scroll p-3 ">
              {messages?.map((message) => (
                <Message isLeft={user.id !== message.senderId} key={message.id}>
                  {message.text}
                </Message>
              ))}
            </div>

            {/* send chat */}
            <div className="my-auto flex items-center gap-3 p-3">
              <input
                type="text"
                value={fields.text}
                placeholder="Write your message!"
                className="w-full rounded-md bg-gray-200 py-3 pl-3 text-gray-600 placeholder-gray-600 placeholder:text-sm focus:placeholder-gray-400 focus:outline-none"
                onChange={(event) =>
                  setFields({ ...fields, text: event.target.value })
                }
              />

              <Button
                onClick={handleSendChat}
                className="border-none bg-transparent enabled:hover:bg-transparent">
                <Symbol Icon={PaperAirplaneIcon} />
              </Button>
            </div>
          </div>
        </Transition.Fade>
      )}
    </div>
  );
};

export default Chat;
