import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
};

const Number = ({ id, isFull, handleChange }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="number"
        defaultValue={50}
        onChange={handleChange}
        className={`${isFull ? "w-full" : ""} clearance rounded border`}
      />
    </div>
  );
};

export default Number;
