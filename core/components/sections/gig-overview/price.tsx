import Button from "@core/components/elements/button";
type Props = {
  price: string;
};
const Price = ({ price }: Props) => {
  return (
    <div className="ml-auto flex flex-col tablet:flex-row items-end tablet:items-center gap-1 tablet:gap-4 rounded-md">
      <span>
        Price starts at
        <span className="font-bold"> {price}</span>
      </span>
      <Button variant="primary">Order Now</Button>
    </div>
  );
};

export default Price;
