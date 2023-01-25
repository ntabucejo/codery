import { Gig } from "@prisma/client";

type Props = {
  gig: Gig;
};

const Details = ({ gig }: Props) => {
  return (
    <div className="space-y-4 rounded bg-primary-dark p-4 text-primary-light">
      <h1 className="text-2xl font-extrabold">{gig.title}</h1>
      <p>{gig.description}</p>
    </div>
  );
};

export default Details;
