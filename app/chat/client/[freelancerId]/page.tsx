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

  return (
    <div>
      <Form user={user} userId={user!.id} freelancerId={freelancerId} />
    </div>
  );
};

export default Page;
