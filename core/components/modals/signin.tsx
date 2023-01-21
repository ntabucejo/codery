import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Button from "../elements/button";
import Modal from "../layouts/modal";
import { signIn } from "next-auth/react";
import { sign } from "crypto";

type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const SignInModal = ({ setOpenModal, openModal }: Props) => {
  const buttons = [
    {
      name: "with Google",
      logo: "/logos/google.png",
      onClick: () => {
        signIn("google");
      },
    },
    {
      name: "with Github",
      logo: "/logos/github.png",
      onClick: () => {
        signIn("github");
      },
    },
    {
      name: "with Twitter",
      logo: "/logos/twitter.png",
      onClick: () => {
        signIn("twitter");
      },
    },
  ];

  return (
    <Modal
      title="Welcome to Codery!"
      state={openModal ? "show" : "hide"}
      handleClose={() => setOpenModal(false)}
      className="max-w-md">
      <div className="grid gap-6">
        {/* login */}
        <div className="flex flex-col gap-4">
          {buttons.map((button) => (
            <Button
              key={button.name}
              variant="secondary"
              className="group relative flex w-full items-center rounded-lg border border-gray-700 py-3.5 px-4 outline-none focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1"
              onClick={button.onClick}>
              <Image
                src={button.logo}
                alt={button.name}
                width={20}
                height={20}
                className="object-cover"
              />
              <p className="ml-4 text-base font-medium text-gray-700 group-hover:text-white">
                Log In {button.name}
              </p>
            </Button>
          ))}
        </div>
        {/* or */}
        <div className="flex items-center gap-4">
          <hr className="w-full bg-gray-400" />
          <p className="whitespace-nowrap px-2.5 text-sm font-light leading-4 text-gray-400">
            Don't have an account?
          </p>
          <hr className="w-full bg-gray-400  " />
        </div>

        {/* sign in */}
        <div className="flex flex-col gap-4">
          {buttons.map((button) => (
            <Button
              key={button.name}
              variant="secondary"
              className="group relative flex w-full items-center rounded-lg border border-gray-700 py-3.5 px-4 outline-none focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1"
              onClick={button.onClick}>
              <Image
                src={button.logo}
                alt={button.name}
                width={20}
                height={20}
                className="object-cover"
              />
              <p className="ml-4 text-base font-medium text-gray-700 group-hover:text-white">
                Continue {button.name}
              </p>
            </Button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default SignInModal;
