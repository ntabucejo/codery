import Balancer from "react-wrap-balancer";

import serialize from "@core/utilities/serialize";
import {
  Category,
  Freelancer,
  Gig,
  Tag,
  Technology,
  Thumbnail,
  User as UserType,
} from "@prisma/client";
import Carousel from "./carousel";
import Details from "./details";
import Chat from "../../chat/float";

type Props = {
  gig: Gig & {
    tags: (Tag & {
      technology: Technology | null;
    })[];
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
      <div className="flex flex-col gap-2">
        <Balancer>
          <h1 className="text-4xl font-extrabold">{gig.title}</h1>
        </Balancer>
        <Balancer>
          <p>{gig.description}</p>
        </Balancer>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 overflow-hidden rounded">
          <Carousel thumbnails={serialize(gig.thumbnails)} />
        </div>
        <div className="">
          <Details gig={serialize(gig)} />
        </div>
      </div>
      <Chat />
    </section>
  );
};

export default Overview;
