import { ChangeEventHandler } from "react";

type Props = {
  placeholder?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
};

const TextField = ({ handleChange, placeholder }: Props) => {
  return (
    <input
      onChange={handleChange}
      type="text"
      placeholder={placeholder}
      className="mt-4 rounded border-[1px] border-primary-dark/25 bg-transparent p-3 pl-4 outline-1 outline-primary-dark/25"
    />
  );
};

export default TextField;
