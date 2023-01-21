type Props = {
  children: React.ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <div className="absolute -top-8 left-6 w-screen max-w-fit whitespace-nowrap rounded rounded-bl-none bg-primary-brand p-2 text-sm text-white">
      {children}
    </div>
  );
};

export default Content;
