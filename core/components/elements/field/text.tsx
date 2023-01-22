import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  placeholder?: string;
  defaultValue?: string
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Text = ({ id, isFull, placeholder, onChange, value, defaultValue }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        className={`${isFull ? "w-full" : ""} clearance rounded border text-sm`}
      />
    </div>
  );
};

export default Text;
