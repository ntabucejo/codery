type Props = {
  children: React.ReactNode;
};

const Label = ({ children }: Props) => {
  return <h2 className="text-2xl font-bold">{children}</h2>;
};

export default Label;
