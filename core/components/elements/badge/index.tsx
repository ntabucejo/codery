import Image from "next/image";

type Props = {
  logo: string;
  name: string;
};

const Badge = ({ logo, name }: Props) => {
  return (
    <div>
      <button className="clearance smooth flex gap-2 rounded bg-white shadow hover:bg-primary-light">
        <Image src={logo} alt={name} width={16} height={16} />
        <span className="text-sm font-semibold">{name}</span>
      </button>
    </div>
  );
};

export default Badge;
