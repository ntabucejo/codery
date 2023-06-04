type Props = {
  children?: React.ReactNode;
  isLeft?: boolean;
};

const Message = ({ children, isLeft }: Props) => {
  return (
    <div
      className={`rounded-md px-4 py-2 text-sm w-fit ${
        isLeft ? "bg-gray-200" : "ml-auto bg-primary-brand text-white"
      }`}>
      {children}
    </div>
  );
};

export default Message;
