type Props = {
  title: string;
  subtitle: string;
};

const Card = ({ title, subtitle }: Props) => {
  return (
    <li className="space-y-4 rounded border bg-white p-4">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <h5 className="text-xs text-primary-dark/fade">{subtitle}</h5>
      </div>
    </li>
  );
};

export default Card;
