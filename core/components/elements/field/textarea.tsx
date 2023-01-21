import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  placeholder?: string;
  handleChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

const Textarea = ({ id, isFull, handleChange, placeholder }: Props) => {
  return (
    <div>
      <textarea
        id={id}
        onChange={handleChange}
        placeholder={placeholder}
        className={`${isFull ? "w-full" : ""} clearance rounded border`}
      />
    </div>
  );
};

export default Textarea;
