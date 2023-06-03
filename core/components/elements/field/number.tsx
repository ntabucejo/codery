import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  value?: number;
  defaultValue?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isDisabled?: boolean;
};

const Number = ({ id, isFull, value, defaultValue, onChange, isDisabled }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="number"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={isDisabled}
        className={`${isFull ? "w-full" : ""} clearance rounded border text-sm`}
      />
    </div>
  );
};

export default Number;
