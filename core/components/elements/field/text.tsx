import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string
};

const Text = ({ id, isFull, onChange, placeholder, defaultValue }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`${isFull ? "w-full" : ""} clearance rounded border`}
      />
    </div>
  );
};

export default Text;
