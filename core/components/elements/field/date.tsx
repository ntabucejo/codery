import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
};

const Date = ({ id, isFull, onChange, defaultValue }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="date"
        onChange={onChange}
        defaultValue={defaultValue}
        className={`${isFull ? "w-full" : ""} clearance rounded border`}
      />
    </div>
  );
};

export default Date;
