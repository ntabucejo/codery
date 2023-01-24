"use client";
import Button from "@core/components/elements/button";
import Symbol from "@core/components/elements/symbol";
import Transition from "@core/components/layouts/transition";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import GreetMessage from "./greet-message";
import Header from "../header";
import Message from "../message";
import Bottom from "../bottom";

const Chat = () => {
  const [openChat, setOpenChat] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);

  useEffect(() => {
    setOpenMessage(true);
  }, []);

  return (
    <div className="fixed bottom-10 right-20 ">
      {/* chat icon */}
      <Button
      className="py-3 animate-shake"
        onClick={() => {
          setOpenChat(!openChat);
          setOpenMessage(false);
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
          <div className="absolute bottom-0 right-[73px] grid h-96 w-96 grid-rows-[auto,1fr,auto] space-y-4  rounded bg-white p-4 shadow-md">
            {/* freelancer name and career */}
            <Header
              name="Anderson Vanhron"
              profession="ReactJS Developer"
              onClick={() => setOpenChat(!openChat)}
            />

            {/* messages */}
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

            {/* input field and buttons */}
            <Bottom />
          </div>
        </Transition.Fade>
      )}
    </div>
  );
};

export default Chat;
