type Props = {
  children: React.ReactNode;
  name: string;
};

const Group = ({ children, name }: Props) => {
  return (
    <div className="space-y-1">
      <strong className="font-bold">{name}</strong>
      {children}
    </div>
  );
};

export default Group;
