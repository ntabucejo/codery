import Avatar from "@core/components/elements/avatar";
import Symbol from "@core/components/elements/symbol";
import { StarIcon } from "@heroicons/react/24/solid";
import Carousel from "./carousel";
import Description from "./description";
import Price from "./price";
import Reviews from "./reviews";

const Overview = () => {
  return (
    <div className="contain grid gap-3 px-2">
      {/* title */}
      <h1 className="text-2xl font-bold">
        I will develop fix deploy responsive website with react nextjs tailwind
      </h1>

      {/* freelancer and rate */}
      <div className="flex items-center gap-3 pr-2">
        <Avatar
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
          alt="Avatar"
        />
        <h4 className="font-bold">dev_ed</h4>
        <div className="gap-0.1 flex items-center">
          {[1, 2, 3, 4, 5].map((rating, index) => (
            <Symbol
              key={rating}
              size="small"
              Icon={StarIcon}
              isHoverDisabled
              className="text-yellow-400"
            />
          ))}
          <p className="ml-1 text-xs font-medium">{"(158)"}</p>
        </div>

        <Price price="50" />
      </div>

      <Carousel />
      <Description />
      <Reviews />
    </div>
  );
};

export default Overview;
