"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const TestSignIn = () => {
  const { data } = useSession();

  return (
    <>
      {data ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn("google")}>Sign In</button>
      )}
    </>
  );
};

export default TestSignIn;
