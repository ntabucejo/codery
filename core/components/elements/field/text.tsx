import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Text = ({ id, isFull, onChange, placeholder }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className={`${isFull ? "w-full" : ""} clearance rounded border`}
      />
    </div>
  );
};

export default Text;
