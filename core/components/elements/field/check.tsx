import { type ChangeEventHandler } from "react";

type Props = {
  children: React.ReactNode;
  id: string;
  defaultValue?: string;
  isChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Check = ({ children, id, defaultValue, isChecked, onChange }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        defaultValue={defaultValue}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id} className="ml-2 text-sm font-medium">
        {children}
      </label>
    </div>
  );
};

export default Check;
