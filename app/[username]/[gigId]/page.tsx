import Gig from "@core/components/sections/gig";
import Gigs from "@core/components/sections/gigs";
import useUser from "@core/hooks/use-user";
import prisma from "@core/libraries/prisma";

type Props = {
  params: {
    username: string;
    gigId: string;
  };
};

const Page = async ({ params }: Props) => {
  const user = await useUser();
  const gig = await prisma.gig.findUnique({
    where: { id: params.gigId },
    include: {
      tags: {
        include: {
          technology: true,
        },
      },
      category: true,
      thumbnails: true,
      freelancer: {
        include: {
          skills: {
            include: {
              technology: true,
            },
          },
          user: true,
        },
      },
      reviews: true,
    },
  });

  const reviews = await prisma.review.findMany({
    where: { gigId: gig?.id },
    include: {
      client: {
        include: {
          user: true,
        },
      },
    },
  });

  const gigs = await prisma.gig.findMany({
    where: {
      freelancer: {
        user: {
          username: params.username,
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

  const { Overview, Reviews } = Gig;

  const myGigs = gigs.filter((myGig) => myGig.id !== gig?.id);

  return (
    <div className="space-y-12">
      <Overview gig={gig!} />
      {myGigs.length ? <Gigs label="Gigs I also offer" data={myGigs} /> : null}
      <Reviews gig={gig!} user={user} reviews={reviews} />
    </div>
  );
};

export default Page;
