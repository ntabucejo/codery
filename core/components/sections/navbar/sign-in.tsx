"use client";

import Button from "@core/components/elements/button";
import Modal from "@core/components/layouts/modal";
import useModal from "@core/hooks/use-modal";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react";
import Image from "next/image";

type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
};

const SignIn = ({ providers }: Props) => {
  const { state, handleOpen, handleClose } = useModal();

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        title="Welcome to Codery!"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum sapiente necessitatibus voluptates quod, incidunt"
        state={state}
        handleClose={handleClose}
        className="max-w-xl">
        <div className="space-y-2">
          {Object.values(providers).filter((provider) => provider.name === "Google").map((provider) => (
            <div key={provider.name}>
              <Button
                variant="secondary"
                isFull
                onClick={() => signIn(provider.id)}>
                <Image
                  src={`/images/auth/${provider.id}.svg`}
                  alt={provider.name}
                  width={24}
                  height={24}
                />
                {provider.name}
              </Button>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default SignIn;
