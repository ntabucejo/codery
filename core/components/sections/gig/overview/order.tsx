import Button from "@core/components/elements/button";
type Props = {
  price: string;
};
const Order = ({ price }: Props) => {
  return (
    <div className="ml-auto flex flex-col items-end gap-1 rounded-md tablet:flex-row tablet:items-center tablet:gap-4">
      <Button variant="primary">Order Now ${price}</Button>
    </div>
  );
};

export default Order;
