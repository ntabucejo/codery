"use client";

import Button from "@core/components/elements/button";
import SignInModal from "@core/components/modals/signin";
import { useState } from "react";

const SignIn = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setOpenModal(true)}>
        Login / SignUp
      </Button>

      {openModal && (
        <SignInModal setOpenModal={setOpenModal} openModal={openModal} />
      )}
    </>
  );
};

export default SignIn;
