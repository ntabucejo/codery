import Session from "@core/providers/session";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <Session>{children}</Session>;
};

export default Providers;
