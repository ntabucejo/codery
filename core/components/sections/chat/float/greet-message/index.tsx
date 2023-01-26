import Transition from "@core/components/layouts/transition";

type Props = {
  children?: React.ReactNode;
  show?: boolean;
};

const GreetMessage = ({ children, show }: Props) => {
  return (
    <Transition.Fade show={show}>
      <div className="text-medium absolute right-[70px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md rounded-br-none border bg-white px-4 py-2 shadow-md">
        {children}
      </div>
    </Transition.Fade>
  );
};

export default GreetMessage;
