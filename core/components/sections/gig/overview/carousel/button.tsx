type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  direction: "previous" | "next";
};

const Button = ({ Icon, onClick, direction }: Props) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full border bg-white p-2 shadow-md hover:scale-105">
      <Icon className="icon" />
    </button>
  );
};

export default Button;
