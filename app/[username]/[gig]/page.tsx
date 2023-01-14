import Gig from "@core/components/sections/gig";

const list = ["Overview", "Description", "Reviews"];

const Page = () => {
  return (
    <>
      <Gig.Overview />
      <Gig.Description />
      <Gig.Reviews />
    </>
  );
};

export default Page;
