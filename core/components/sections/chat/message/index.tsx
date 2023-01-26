type Props = {
  children?: React.ReactNode;
  isLeft?: boolean;
};

const Message = ({ children, isLeft }: Props) => {
  return (
    <div
      className={`max-w-[250px] rounded-lg rounded-bl-none px-4 py-2 text-sm ${
        isLeft ? "bg-gray-200" : "ml-auto bg-primary-brand text-white"
      }`}>
      {children}
    </div>
  );
};

export default Message;
