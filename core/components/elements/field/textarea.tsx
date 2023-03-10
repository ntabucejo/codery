import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  isDisabled?: boolean;
};

const Textarea = ({
  id,
  isFull,
  placeholder,
  value,
  onChange,
  isDisabled,
}: Props) => {
  return (
    <div>
      <textarea
        id={id}
        rows={8}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        className={`${isFull ? "w-full" : ""} clearance rounded border text-sm`}
      />
    </div>
  );
};

export default Textarea;
