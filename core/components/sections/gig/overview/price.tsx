import Button from "@core/components/elements/button";
type Props = {
  price: string;
};
const Price = ({ price }: Props) => {
  return (
    <div className="ml-auto flex flex-col items-end gap-1 rounded-md tablet:flex-row tablet:items-center tablet:gap-4">
      <span>
        Price starts at
        <span className="font-bold"> {price}</span>
      </span>
      <Button variant="primary">Order Now</Button>
    </div>
  );
};

export default Price;
