import Route from "../../elements/route";
import Search from "./search";
import SignIn from "./sign-in";
import User from "./user";
import { getProviders } from "next-auth/react";
import serialize from "@core/utilities/serialize";
import prisma from "@core/libraries/prisma";
import Chat from "../chat/float/navbar";
import useSession from "@core/hooks/use-session";

const Navbar = async () => {
  const session = await useSession();
  const users = await prisma.user.findMany();
  const gigs = await prisma.gig.findMany();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! || "!" },
    include: {
      freelancer: true,
    },
  });

  const offers = await prisma.offer.findMany({
    where: { userId: user?.id, isAccepted: false },
    include: {
      freelancer: {
        include: {
          user: true,
        },
      },
      gig: true,
    },
  });

  const providers = await getProviders();

  const asClientMessages = await prisma.message.findMany({
    where: {
      userId: user?.id ?? "!",
    },
    include: {
      user: true,
      freelancer: {
        include: {
          user: true,
        },
      },
    },
  });

  const asFreelancerMessages = await prisma.message.findMany({
    where: {
      freelancerId: user?.freelancer?.id || "!",
    },
    include: {
      user: true,
    },
  });

  return (
    <nav className="contain space-y-4">
      {/* Upper Nav */}
      <div className="flex items-center gap-4">
        <strong className="text-2xl mr-auto">Codery</strong>
        {/* <Search users={users} gigs={gigs} username={user?.username!} /> */}
        <ul className="flex gap-4">
          <Route to="Home" href="/" isBold />
        </ul>

        <Chat
          asClientMessages={asClientMessages}
          asFreelancerMessages={asFreelancerMessages}
        />

        {user ? (
          <User user={serialize(user)} offers={offers} />
        ) : (
          <SignIn providers={providers!} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
