"use client";
import Symbol from "@core/components/elements/symbol";
import { Transition } from "@headlessui/react";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleLeftRightIcon,
  MinusIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Fragment, useEffect, useState } from "react";

const Chat = () => {
  const [openChat, setOpenChat] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);

  useEffect(() => {
    setOpenMessage(true);
  }, []);

  return (
    <div className="fixed bottom-10 right-20 ">
      {/* chat icon */}
      <button
        onClick={() => {
          setOpenChat(!openChat);
          setOpenMessage(false);
        }}
        className="relative grid h-14 w-14 animate-shake cursor-pointer place-items-center rounded-full bg-primary-brand shadow-md hover:scale-105 hover:transition-all hover:duration-300">
        <Symbol
          Icon={ChatBubbleLeftRightIcon}
          size="medium"
          className="font-semibold text-white hover:text-white"
        />
      </button>

      {/* pop up first message */}
      <Transition show={openMessage} as={Fragment}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="text-medium absolute right-[70px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md rounded-br-none border bg-white px-4 py-2 shadow-md">
            Hi! Can I help you?
          </div>
        </Transition.Child>
      </Transition>

      {/* chat floated */}
      {openChat && (
        <Transition show={openChat} as={Fragment}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="absolute bottom-0 right-[73px] grid h-96 w-96 grid-rows-[auto,1fr,auto] space-y-4  rounded bg-white p-4 shadow-md">
              {/* freelancer name and career */}
              <div className="relative flex w-full items-center space-x-4">
                <div className="flex w-full flex-col leading-tight">
                  <div className="grid grid-cols-[1fr,auto] items-center">
                    <span className="mr-3 font-semibold  text-primary-dark">
                      Anderson Vanhron
                    </span>
                    <div className="flex items-end gap-1">
                      <button onClick={() => setOpenChat(!openChat)}>
                        <Symbol Icon={MinusIcon} size="medium" />
                      </button>
                      <button onClick={() => setOpenChat(!openChat)}>
                        <Symbol Icon={XMarkIcon} size="medium" />
                      </button>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600">
                    ReactJS Developer
                  </span>
                </div>
              </div>

              {/* messages */}
              <div
                id="messages"
                className="scrollbar-thumb-primary-dark scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex flex-col space-y-4 overflow-y-auto">
                {/* freelancer's message */}
                <div className="max-w-[250px] rounded-lg rounded-bl-none bg-gray-200 px-4 py-2 text-sm">
                  Since we both agreed about the terms, I think I should send
                  you a custom offer especially made for you. Wait a sec.
                </div>

                {/* clients's message */}
                <div className="ml-auto max-w-[250px] rounded-lg rounded-bl-none bg-primary-brand px-4 py-2 text-sm text-white">
                  Yea' sure.
                </div>

                {/* freelancer's message */}
                <div className="max-w-[250px] rounded-lg rounded-bl-none bg-gray-200 px-4 py-2 text-sm">
                  Since we both agreed about the terms.
                </div>

                {/* clients's message */}
                <div className="ml-auto max-w-[250px] rounded-lg rounded-bl-none bg-primary-brand px-4 py-2 text-sm text-white">
                  Yea' sure.
                </div>
              </div>

              {/* input field and button */}
              <div className="flex items-center gap-3 border-lime-500">
                <input
                  type="text"
                  placeholder="Write your message!"
                  className="w-full rounded-md bg-gray-200 py-3 pl-3 text-gray-600 placeholder-gray-600 placeholder:text-sm focus:placeholder-gray-400 focus:outline-none"
                />
                <div className="flex items-center gap-2">
                  <Symbol Icon={PaperClipIcon} />
                  <button>
                    <Symbol
                      Icon={PaperAirplaneIcon}
                      className="text-primary-brand"
                    />
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Transition>
      )}
    </div>
  );
};

export default Chat;
