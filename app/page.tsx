import Gigs from "@core/components/sections/gigs";
import Hero from "@core/components/sections/hero";

const Page = () => {
  return (
    <>
      <Hero isContained image='https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
      <Gigs />
    </>
  );
};

export default Page;
