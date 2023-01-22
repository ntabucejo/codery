import Tooltip from "../tooltip";

type Props = {
  children: React.ReactNode;
  id: string;
  label: string;
  description: string;
  tooltip?: string;
  className?: string;
};

const Body = ({
  children,
  id,
  label,
  description,
  tooltip,
  className,
}: Props) => {
  return (
    <div className={`${className ? className : ""} space-y-2 py-2`}>
      <div>
        <div className="flex items-center gap-2">
          <label htmlFor={id} className="font-bold">
            {label}
          </label>
          {tooltip ? <Tooltip>{tooltip}</Tooltip> : null}
        </div>
        <p className="text-sm text-primary-dark/fade">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Body;
