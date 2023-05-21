"use client";
import Button from "@core/components/elements/button";
import Symbol from "@core/components/elements/symbol";
import Transition from "@core/components/layouts/transition";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import GreetMessage from "./greet-message";
import Header from "../../header";
import Message from "../../chat-piece";
import Bottom from "../../bottom";
import {
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegments,
} from "next/navigation";
import useSWR from "swr";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";

const Chat = () => {
  const [openChat, setOpenChat] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const segments = useSelectedLayoutSegments();

  console.log(segments);

  const chat = searchParams.get("chat");

  // const { data } = useSWR(`/api/gigs/${gigId}`);

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
          <div className="absolute bottom-0 right-[73px] grid h-[400px] w-96 grid-rows-[auto,1fr,auto] space-y-4  rounded bg-white p-4 shadow-md">
            <Header
              name="Anderson Vanhron"
              profession="ReactJS Developer"
              onClick={() => {
                handleOpenChat();
              }}
              isFloated
            />

            <div
              id="messages"
              className="scrollbar-thumb-primary-dark scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex flex-col space-y-2 overflow-y-auto">
              <Message isLeft>Since we both agreed about the terms.</Message>
              <Message>Yea' sure.</Message>
              <Message isLeft>Since we both agreed about the terms.</Message>
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
