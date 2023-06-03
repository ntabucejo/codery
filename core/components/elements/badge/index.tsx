type Props = {
  name: string;
};

const Badge = ({ name }: Props) => {
  return (
    <button className="clearance smooth flex gap-2 rounded bg-white shadow hover:bg-primary-light">
      <span className="text-sm font-semibold">{name}</span>
    </button>
  );
};

export default Badge;
