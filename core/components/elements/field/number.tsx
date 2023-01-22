import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  value?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Number = ({ id, isFull, value, onChange }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="number"
        value={value}
        onChange={onChange}
        className={`${isFull ? "w-full" : ""} clearance rounded border text-sm`}
      />
    </div>
  );
};

export default Number;
