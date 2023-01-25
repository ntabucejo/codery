import Button from "@core/components/elements/button";
import Hero from "@core/components/sections/hero";
import Cards from "@core/components/sections/cards";
import useUser from "@core/hooks/use-user";
import {
  CurrencyDollarIcon,
  DocumentIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Page = async () => {
  const user = await useUser();

  const cards = [
    {
      Icon: DocumentIcon,
      title: "Create a Gig",
      description:
        "Sign up for free, set up your Gig, and offer your work to our global audience.",
    },
    {
      Icon: PaperAirplaneIcon,
      title: "Deliver great work",
      description:
        "Get notified when you get an order and use our system to discuss details with customers.",
    },
    {
      Icon: CurrencyDollarIcon,
      title: "Get paid",
      description:
        "Get paid on time, every time. Payment is available for withdrawal as soon as it clears.",
    },
  ];

  return (
    <>
      <section className="space-y-4">
        <div className="relative">
          <Hero image="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/617215525b1ed028222c5df7926a8d4a-1638381884851/1920-1440%28C%29.jpg" />
          <div className="absolute top-1/2 left-10 flex -translate-y-1/2 flex-col items-start  text-white laptop:left-96">
            <h1 className="text-2xl font-semibold laptop:text-4xl">
              Be The Best Freelancer.
            </h1>
            <h4 className="text-lg font-medium">Reach your Goal through us.</h4>
            <Button className="text-md mt-3 cursor-pointer bg-primary-brand transition-all duration-300 hover:scale-105 hover:bg-primary-brand/50">
              <a href={`/${user?.username}/create/freelancer/about`}>
                Become a Freelancer
              </a>
            </Button>
          </div>
        </div>

        <Cards title="How it Works" list={cards} />

        <div className="contain grid gap-1 rounded border-2 p-6 text-xl text-primary-dark laptop:grid-cols-2">
          <div className="felx flex-col gap-1">
            <strong className="text-2xl">Codery</strong>
            <div className="mt-12 flex flex-col">
              <p className="text-[35px] font-semibold leading-10">
                On-demand developers <br /> led by the worlds leading experts.
              </p>
              <br />
              <p className="-mt-4 max-w-xl">
                Discover what it takes to be a top-notch developer on Codery
                with your skill.
              </p>
            </div>
            <Button className="text-md mr-auto mt-6 cursor-pointer bg-primary-brand transition-all duration-300 hover:scale-105 hover:bg-primary-brand/50">
              <a href={`/${user?.username}/create/freelancer/about`}>
                Become a Freelancer
              </a>
            </Button>
          </div>

          <div className="relative mt-6 aspect-video laptop:mt-0">
            <Image
              src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/6099cd6c03dbc1f7e26a261b_Blog-1-p-800.png"
              alt="codery image"
              fill
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
