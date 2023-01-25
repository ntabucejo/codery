import {
  Category,
  Freelancer,
  Gig as GigType,
  Thumbnail,
  User,
} from "@prisma/client";
import Gig from "./gig";

type Props = {
  data: (GigType & {
    category: Category;
    thumbnails: Thumbnail[];
    freelancer: Freelancer & {
      user: User;
    };
  })[];
};

const Gigs = ({ data: gigs }: Props) => {
  return (
    <section className="contain">
      <ul className="grid gap-4 book:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5">
        {gigs.map((gig) => (
          <Gig key={gig.id} data={gig} />
        ))}
      </ul>
    </section>
  );
};

export default Gigs;
