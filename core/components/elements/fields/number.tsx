import { ChangeEventHandler } from "react";

type Props = {
  handleChange?: ChangeEventHandler<HTMLInputElement>;
};

const NumberField = ({ handleChange }: Props) => {
  return (
    <input
      onChange={handleChange}
      type="number"
      placeholder="$50"
      className="mt-4 rounded border-[1px] border-primary-dark/25 bg-transparent p-3 pl-4 outline-1 outline-primary-dark/25 mr-auto"
    />
  );
};

export default NumberField;
