import Balancer from "react-wrap-balancer";

type Props = {
  children: React.ReactNode;
  number: 1 | 2;
};

const Heading = ({ children, number }: Props) => {
  if (number === 1)
    return (
      <h1 className="text-4xl font-bold">
        <Balancer ratio={3}>
          I will develop fix deploy responsive website with react nextjs
          tailwind
        </Balancer>
      </h1>
    );
  return <h2 className="mt-24 text-2xl font-bold">{children}</h2>;
};

export default Heading;
