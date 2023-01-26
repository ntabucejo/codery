import Avatar from "@core/components/elements/avatar";

type Props = {
  name?: string;
  message?: string;
  image: string;
};

const InboxMessage = ({ name, message, image }: Props) => {
  return (
    <div className="w-80 flex cursor-pointer gap-2 border-b py-2 px-4 transition-all duration-300 hover:bg-gray-100">
      <Avatar src={image} alt="Avatar" size="medium" />

      <div className="flex flex-col">
        <h4 className="max-h-10 overflow-hidden text-sm font-semibold">{name}</h4>
        <p className="mt-1 max-h-10 overflow-hidden  text-sm">{message}</p>
        <h5 className="mt-2 text-xs">1 week ago</h5>
      </div>
    </div>
  );
};

export default InboxMessage;
