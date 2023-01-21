type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isHoverDisabled?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
};

const Symbol = ({
  Icon,
  isHoverDisabled,
  size = "medium",
  className,
}: Props) => {
  let style = "";

  switch (size) {
    case "small": {
      const className = "h-4 w-4";
      style = className;
      break;
    }
    case "medium": {
      const className = "h-6 w-6";
      style = className;
      break;
    }
    case "large": {
      const className = "h-8 w-8";
      style = className;
      break;
    }
    default: {
      style = "no-style";
    }
  }

  return (
    <Icon
      className={`
      ${
        !isHoverDisabled
          ? "hover:cursor-pointer hover:text-primary-dark group-hover:cursor-pointer group-hover:text-primary-dark"
          : ""
      } 
      ${className ? className : "text-primary-dark/fade"} 
      ${style} 
      smooth aspect-square flex-none`}
    />
  );
};

export default Symbol;
