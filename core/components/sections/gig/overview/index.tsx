import Chat from "../../chat/float";
import Heading from "../heading";
import AboutMe from "./about-me";
import Carousel from "./carousel";

const Overview = () => {
  return (
    <section className="contain space-y-6">
      {/* freelancer and rate */}
      <div className="grid grid-cols-[5fr,2fr] gap-6">
        <Carousel />
        <AboutMe />
      </div>
      <Heading number={1}>I will develop fix deploy responsive</Heading>
      <Chat />
    </section>
  );
};

export default Overview;
