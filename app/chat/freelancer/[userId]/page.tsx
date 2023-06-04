import useUser from "@core/hooks/use-user";
import Form from "./form";

type Props = {
  params: {
    userId: string;
  };
};

const Page = async ({ params }: Props) => {
  const { userId } = params;

  const user = await useUser();

  return <Form user={user} userId={userId} freelancerId={user!.freelancer!.id} />;
};

export default Page;
