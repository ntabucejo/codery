import Avatar from "@core/components/elements/avatar";
import Link from "next/link";

type Props = {
  name?: string;
  message?: string;
  image: string;
};

const InboxMessage = ({ name, message, image }: Props) => {
  return (
    <div className="flex w-full cursor-pointer gap-2 border-b py-2 px-4 transition-all duration-300 hover:bg-gray-100">
      <Avatar src={image} alt="Avatar" size="medium" />

      <div className="flex flex-col">
        <h4 className="max-h-10 overflow-hidden text-sm font-semibold">
          {name}
        </h4>
        <p className="mt-1 max-h-10 overflow-hidden  text-sm">{message}</p>
      </div>
    </div>
  );
};

export default InboxMessage;
