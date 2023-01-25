import prisma from "@core/libraries/prisma";

const useGigs = async (username?: string) => {
  const gigs = await prisma.gig.findMany({
    where: {
      freelancer: {
        user: {
          username: username,
        },
      },
    },
    include: {
      category: true,
      thumbnails: true,
      freelancer: {
        include: {
          user: true,
        },
      },
    },
  });

  return gigs;
};

export default useGigs;
