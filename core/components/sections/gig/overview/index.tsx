import Avatar from "@core/components/elements/avatar";
import Symbol from "@core/components/elements/symbol";
import { StarIcon } from "@heroicons/react/24/solid";
import Heading from "../heading";
import Carousel from "./carousel";
import Price from "./price";

const Overview = () => {
  return (
    <section className="contain space-y-4">
      <Heading number={1}>
        I will develop fix deploy responsive website with react nextjs tailwind
      </Heading>
      {/* freelancer and rate */}
      <div className="flex items-center gap-3 pr-2">
        <Avatar
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
          alt="Avatar"
          size="medium"
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
    </section>
  );
};

export default Overview;
