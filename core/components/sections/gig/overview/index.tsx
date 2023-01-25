import Button from "@core/components/elements/button";
import {
  Category,
  Freelancer,
  Gig,
  Thumbnail,
  User as UserType,
} from "@prisma/client";
import About from "./about";
import Carousel from "./carousel";
import Details from "./details";

type Props = {
  gig: Gig & {
    category: Category;
    thumbnails: Thumbnail[];
    freelancer: Freelancer & {
      user: UserType;
    };
  };
};

const Overview = ({ gig }: Props) => {
  return (
    <section className="contain space-y-4">
      <div className="grid grid-cols-[6fr,2fr] gap-4">
        <Carousel thumbnails={gig.thumbnails} />
        <About freelancer={gig.freelancer}/>
      </div>
      <div className="flex gap-4">
        <Button>ORDER NOW {`$${gig.from} - $${gig.to}`}</Button>
        <Button variant="tertiary">Add To Favorites</Button>
      </div>
      <Details gig={gig} />
    </section>
  );
};

export default Overview;
