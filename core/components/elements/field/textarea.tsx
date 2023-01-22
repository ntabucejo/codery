import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

const Textarea = ({ id, isFull, onChange, placeholder }: Props) => {
  return (
    <div>
      <textarea
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        className={`${isFull ? "w-full" : ""} clearance rounded border`}
      />
    </div>
  );
};

export default Textarea;
