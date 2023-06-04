import { type ChangeEventHandler } from "react";

type Props = {
  id: string;
  isFull?: boolean;
  placeholder?: string;
  value?: string;
  defaultValue?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  isDisabled?: boolean;
};

const Textarea = ({
  id,
  isFull,
  placeholder,
  value,
  defaultValue,
  onChange,
  isDisabled,
}: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <textarea
        id={id}
        rows={15}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        className={`${isFull ? "w-full" : ""} clearance rounded border text-sm`}
      />
      <span className="ml-auto text-sm font-semibold">{value?.length ?? 0}/1000 Characters</span>
    </div>
  );
};

export default Textarea;
