import Button from "@core/components/elements/button";
import Hero from "@core/components/sections/hero";
import useUser from "@core/hooks/use-user";

const Page = async () => {
  const { user } = await useUser();

  return (
    <div>
      <div className="relative">
        <Hero image="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/617215525b1ed028222c5df7926a8d4a-1638381884851/1920-1440%28C%29.jpg" />
        <div className="absolute top-1/2 left-10 flex -translate-y-1/2 flex-col items-start  text-white laptop:left-96">
          <h1 className="text-2xl font-semibold laptop:text-4xl">
            Be The Best Freelancer.
          </h1>
          <h4 className="font-medium text-lg">Reach your Goal through us.</h4>
          <Button className="text-md mt-3 cursor-pointer bg-primary-brand transition-all duration-300 hover:scale-105 hover:bg-primary-brand/50">
            <a href={`/${user?.username}/create/freelancer/about`}>
              Become a Freelancer
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
