import Chat from "@core/components/sections/chat";
import TestSignIn from "./test-sign-in";
import UploadImage from "./upload-image";

const Page = () => {
  return (
    <>
      <section className="contain">
        {/* <TestSignIn />
        <UploadImage /> */}
        <Chat/>
      </section>
    </>
  );
};

export default Page;
