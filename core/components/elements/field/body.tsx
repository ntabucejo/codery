import { ZodIssue } from "zod";
import Tooltip from "../tooltip";

type Props = {
  children: React.ReactNode;
  id: string;
  label: string;
  description?: string;
  tooltip?: string;
  warning?: ZodIssue;
  className?: string;
};

const Body = ({
  children,
  id,
  label,
  description,
  tooltip,
  warning,
  className,
}: Props) => {
  return (
    <div className={`${className ? className : ""} relative space-y-2 py-2`}>
      <div>
        <div className="flex items-center justify-start gap-2">
          <label htmlFor={id} className="font-bold">
            {label}
          </label>
          {tooltip ? <Tooltip>{tooltip}</Tooltip> : null}
        </div>
        <p className="text-left text-sm text-primary-dark/fade">
          {description}
        </p>
      </div>
      {children}
      {warning ? (
        <span className="text-xs text-red-500">{warning.message}</span>
      ) : null}
    </div>
  );
};

export default Body;
