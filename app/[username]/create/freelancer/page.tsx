import Create from "@core/components/sections/create";
import useUser from "@core/hooks/use-user";
import serialize from "@core/utilities/serialize";

const Page = async () => {
  const user = await useUser();

  return (
    <>
      <Create.Freelancer user={serialize(user)} />
    </>
  );
};

export default Page;
