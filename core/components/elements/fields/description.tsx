type Props = {
  paragraph: string;
};

const Description = ({ paragraph }: Props) => {
  return (
    <p className="text-sm font-medium text-primary-dark/50">{paragraph}</p>
  );
};

export default Description;
