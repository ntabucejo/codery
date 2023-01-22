import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Number = ({ id, isFull, onChange }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="number"
        defaultValue={50}
        onChange={onChange}
        className={`${isFull ? "w-full" : ""} clearance rounded border text-sm`}
      />
    </div>
  );
};

export default Number;
