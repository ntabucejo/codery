import Chat from "@core/components/sections/chat/float/gig";
import useUser from "@core/hooks/use-user";
import prisma from "@core/libraries/prisma";

type Props = {
  children: React.ReactNode;
  params: {
    gigId: string;
  };
};

const Layout = async ({ children, params }: Props) => {
  const { gigId } = params;
  const user = await useUser();

  const gig = await prisma.gig.findUnique({
    where: { id: gigId },
    include: {
      thumbnails: true,
      freelancer: {
        include: {
          user: true,
        },
      },
    },
  });

  if (!user || !gig) return <></>;

  return (
    <>
      {children}
      {user.id !== gig.freelancer.userId ? (
        <Chat user={user} gig={gig} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Layout;
