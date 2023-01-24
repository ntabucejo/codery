import Create from "@core/components/sections/create";
import stores from "@core/stores";

const Page = () => {
  const { technologies } = stores.contents.getState();

  return (
    <>
      <Create.Freelancer technologies={technologies} />
    </>
  );
};

export default Page;
