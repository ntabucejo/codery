import { ChangeEventHandler } from "react";

type Props = {
  placeholder?: string;
  value?: string;
  handleChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

const TextAreaField = ({ handleChange, placeholder, value }: Props) => {
  return (
    <div className="grid gap-1">
      <textarea
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={1000}
        className="mt-4 rounded border-[1px] border-primary-dark/25 bg-transparent p-3 pl-4 outline-1 outline-primary-dark/25"
      />
      <span className="ml-auto text-sm text-primary-dark/50">
        {value ? value?.length : placeholder?.length} / 1000 Characters
      </span>
    </div>
  );
};

export default TextAreaField;
