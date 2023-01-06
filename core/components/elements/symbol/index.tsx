type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isHoverDisabled?: boolean;
  className?: string;
};

const Symbol = ({ Icon, isHoverDisabled, className }: Props) => {
  return (
    <Icon
      className={`
      ${className ? className : ""} 
      ${
        !isHoverDisabled
          ? "hover:cursor-pointer hover:text-primary-dark group-hover:cursor-pointer group-hover:text-primary-dark"
          : ""
      } 
      icon smooth stroke-2 text-primary-dark/fade`}
    />
  );
};

export default Symbol;
