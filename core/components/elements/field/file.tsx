type Props = {
  id: string;
};

const File = ({ id }: Props) => {
  return (
    <div>
      <input
        id={id}
        type="file"
        className="file:clearance file:smooth w-[100px] cursor-pointer bg-transparent file:max-w-fit file:rounded file:border file:border-solid file:bg-white file:hover:bg-primary-dark file:hover:text-primary-light"
      />
    </div>
  );
};

export default File;
