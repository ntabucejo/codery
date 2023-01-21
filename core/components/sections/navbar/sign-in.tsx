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
        Login / SignUp
      </Button>

      <Modal
        title="Welcome to Codery!"
        state={state}
        handleClose={handleClose}
        className="max-w-md">
        <div className="grid grid-cols-2 gap-4">
          {Object.values(providers).map((provider) => (
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
