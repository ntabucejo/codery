import Label from "@core/components/elements/label";
import {
  Category,
  Freelancer,
  Gig as GigType,
  Review,
  Thumbnail,
  User,
} from "@prisma/client";
import Gig from "./gig";

type Props = {
  label?: string;
  data: (GigType & {
    category: Category;
    thumbnails: Thumbnail[];
    reviews: Review[];
    freelancer: Freelancer & {
      user: User;
    };
  })[];
};

const Gigs = ({ label, data: gigs }: Props) => {
  return (
    <section className="contain space-y-4">
      <Label>{label}</Label>
      <ul className="grid gap-4 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
        {gigs.map((gig) => (
          <Gig key={gig.id} data={gig} />
        ))}
      </ul>
    </section>
  );
};

export default Gigs;
