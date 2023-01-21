import { ChangeEventHandler } from "react";

type Props = {
  type?: string;
  placeholder?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
};

const TextField = ({ handleChange, type, placeholder }: Props) => {
  return (
    <input
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      className="mt-4 rounded border-[1px] border-primary-dark/25 bg-transparent p-3 pl-4 outline-1 outline-primary-dark/25"
    />
  );
};

export default TextField;
