import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  placeholder?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
};

const Text = ({ id, isFull, handleChange, placeholder }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        className={`${isFull ? "w-full" : ""} clearance rounded border`}
      />
    </div>
  );
};

export default Text;
