"use client";

import { signIn, signOut } from "next-auth/react";

const TestSignIn = () => {
  return (
    <>
      <button onClick={() => signIn("google")}>Sign In</button>
      <br />
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
};

export default TestSignIn;
