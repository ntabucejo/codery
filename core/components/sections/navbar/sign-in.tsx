"use client";

import Button from "@core/components/elements/button";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <Button variant="primary" onClick={() => signIn("google")}>
      Login
    </Button>
  );
};

export default SignIn;
