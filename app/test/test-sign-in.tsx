"use client";

import { signIn } from "next-auth/react";

const TestSignIn = () => {
  return <button onClick={() => signIn("google")}>Sign In</button>;
};

export default TestSignIn;
