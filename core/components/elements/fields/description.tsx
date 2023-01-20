type Props = {
  paragraph: string;
};

const Description = ({ paragraph }: Props) => {
  return <p className="text-sm text-primary-dark/50 font-medium">{paragraph}</p>;
};

export default Description;
