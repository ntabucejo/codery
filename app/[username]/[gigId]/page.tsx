import Gig from "@core/components/sections/gig";
import prisma from "@core/libraries/prisma";

type Props = {
  params: {
    username: string;
    gigId: string;
  };
};

const Page = async ({ params }: Props) => {
  const gig = await prisma.gig.findUnique({
    where: { id: params.gigId },
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
  const { Overview, Reviews } = Gig;

  return (
    <>
      <Overview gig={gig!} />
      <Reviews />
    </>
  );
};

export default Page;
