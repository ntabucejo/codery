"use client";
import Button from "@core/components/elements/button";
import Symbol from "@core/components/elements/symbol";
import Transition from "@core/components/layouts/transition";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import GreetMessage from "./greet-message";
import Header from "./header";
import Message from "../../chat-piece";
import Bottom from "./bottom";
import {
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegments,
} from "next/navigation";
import useSWR from "swr";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import Image from "next/image";

const Chat = () => {
  const [openChat, setOpenChat] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log(pathname?.split("/")[2]);

  const chat = searchParams.get("chat");

  const { data: gig } = useSWR(`/api/gigs/${pathname?.split("/")[2]}`);

  console.log({ gig });
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
            <Header
              name={gig.freelancer.user.name}
              location={gig.freelancer.user.location}
              onClick={() => {
                handleOpenChat();
              }}
            />
            
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
                <div className="text-sm font-semibold">{gig.title}</div>
              </div>
            </div>

            {/* messages */}
            <div
              id="messages"
              className="scrollbar-thumb-primary-dark scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex flex-col space-y-2 overflow-y-auto px-4">
              {/* messages */}
              <Message isLeft>Since we both agreed about the terms.</Message>
              <Message>Yea' sure.</Message>
              <Message isLeft>Since we both agreed about the terms.</Message>
              <Message>Yea' sure.</Message>
              <Message>Yea' sure.</Message>
              <Message>Yea' sure.</Message>
              <Message>Yea' sure.</Message>
              <Message>Yea' sure.</Message>
              <Message>Yea' sure.</Message>
              <Message>Yea' sure.</Message>
            </div>

            <Bottom />
          </div>
        </Transition.Fade>
      )}
    </div>
  );
};

export default Chat;
