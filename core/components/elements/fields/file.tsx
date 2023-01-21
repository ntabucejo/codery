import { ChangeEventHandler } from "react";

type Props = {
  className?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
};

const FileField = ({ handleChange, className }: Props) => {
  return (
    <input
      onChange={handleChange}
      type="file"
      className={`${
        className ? className : ""
      } rounded border-[1px] border-primary-dark/25 bg-transparent p-3 pl-4 outline-1 outline-primary-dark/25`}
    />
  );
};

export default FileField;
