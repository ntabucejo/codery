import prisma from "@core/libraries/prisma";

const useGigs = async (userId?: string) => {
  const gigs = await prisma.gig.findMany({
    where: { freelancerId: userId },
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
