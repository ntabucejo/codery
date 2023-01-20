type Props = {
  children: React.ReactNode;
};

const Content = ({ children }: Props) => {
  return <div className="bg-primary-brand p-2 text-sm text-white absolute -top-8 left-6 rounded rounded-bl-none max-w-lg">{children}</div>;
};

export default Content;
