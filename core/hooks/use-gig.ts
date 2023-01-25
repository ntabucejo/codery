import prisma from "@core/libraries/prisma";

const useGig = async (id: string) => {
  const gigs = await prisma.gig.findUnique({
    where: { id: id },
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

export default useGig;
