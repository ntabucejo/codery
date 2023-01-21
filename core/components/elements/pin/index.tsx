import Symbol from "../symbol";

type Props = {
  children: React.ReactNode;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: "small" | "medium" | "large";
};

const Pin = ({ children, Icon, size = "medium" }: Props) => {
  return (
    <div className="flex items-center gap-1">
      <Symbol size="small" Icon={Icon} isHoverDisabled />
      <h6
        className={`
        ${size === "small" ? "text-xs" : ""}
        ${size === "medium" ? "text-sm" : ""}
        ${size === "large" ? "text-base" : ""}
       text-primary-dark/fade`}>
        {children}
      </h6>
    </div>
  );
};

export default Pin;
