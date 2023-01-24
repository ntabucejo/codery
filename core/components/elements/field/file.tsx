type Props = {
  id: string;
  name: string;
};

const File = ({ id, name }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="file"
        name={name}
        className="file:clearance file:smooth w-full cursor-pointer bg-transparent file:rounded file:border file:border-solid file:bg-white file:hover:bg-primary-dark file:hover:text-primary-light"
      />
    </div>
  );
};

export default File;
