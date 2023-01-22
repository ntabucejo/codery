import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string
};

const Text = ({ id, isFull, placeholder, onChange, value, defaultValue }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`${isFull ? "w-full" : ""} clearance rounded border text-sm`}
      />
    </div>
  );
};

export default Text;
