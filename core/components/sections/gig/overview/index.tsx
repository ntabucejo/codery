import Balancer from "react-wrap-balancer";

import serialize from "@core/utilities/serialize";
import {
  Category,
  Freelancer,
  Gig,
  Tag,
  Technology,
  Thumbnail,
  User,
  User as UserType,
} from "@prisma/client";
import Carousel from "./carousel";
import Details from "./details";

type Props = {
  user:
    | (User & {
        freelancer: Freelancer | null;
      })
    | null;
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

const Overview = ({ user, gig }: Props) => {
  return (
    <section className="contain space-y-4">
      <div className="grid grid-flow-row gap-4 laptop:grid-cols-4">
        <div className="col-span-3 overflow-hidden rounded">
          <Carousel thumbnails={serialize(gig.thumbnails)} />
          <div className="flex flex-col gap-2 mt-4">
            <Balancer>
              <h1 className="text-4xl font-extrabold">{gig.title}</h1>
            </Balancer>
            <Balancer>
              <p>{gig.description}</p>
            </Balancer>
          </div>
        </div>
        <div className="">
          <Details user={user} gig={serialize(gig)} />
        </div>
      </div>
    </section>
  );
};

export default Overview;
