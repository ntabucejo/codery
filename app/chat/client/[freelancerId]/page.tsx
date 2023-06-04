import useUser from "@core/hooks/use-user";
import prisma from "@core/libraries/prisma";
import Form from "./form";

type Props = {
  params: {
    freelancerId: string;
  };
};

const Page = async ({ params }: Props) => {
  const { freelancerId } = params;

  const user = await useUser();

  const freelancer = await prisma.freelancer.findUnique({
    where: {id: freelancerId},
    include: {
      user: true
    }
  });

  return <Form freelancer={freelancer} user={user} userId={user!.id} freelancerId={freelancerId} />;
};

export default Page;
