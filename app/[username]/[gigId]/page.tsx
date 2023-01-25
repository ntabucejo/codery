import Gig from "@core/components/sections/gig";
import useGig from "@core/hooks/use-gig";

type Props = {
  params: {
    username: string;
    gigId: string;
  };
};

const Page = async ({ params }: Props) => {
  const gig = await useGig(params.gigId);
  const { Overview, Reviews } = Gig;

  return (
    <>
      <Overview gig={gig!} />
      <Reviews />
    </>
  );
};

export default Page;
