type Props = {
  name: string;
};

const Label = ({ name }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold">{name}</label>
    </div>
  );
};

export default Label;
