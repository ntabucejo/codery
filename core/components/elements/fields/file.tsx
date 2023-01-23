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
      className={`${className ? className : ""}`}
    />
  );
};

export default FileField;
