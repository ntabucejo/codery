import Hero from "@core/components/sections/hero";
import prisma from "@core/libraries/prisma";
import useSession from "@core/hooks/use-session";

import FilteredGigs from "./gigs";

const Page = async () => {
  const session = await useSession();
  const categories = await prisma.category.findMany();
  const gigs = await prisma.gig.findMany({
    include: {
      category: true,
      thumbnails: true,
      reviews: true,
      freelancer: {
        include: {
          user: true,
        },
      },
    },
  });

  return (
    <>
      <Hero image="https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      {session?.user ? (
        <FilteredGigs categories={categories} gigs={gigs} />
      ) : null}
    </>
  );
};

export default Page;
