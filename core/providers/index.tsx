import Query from "@core/providers/query";
import Session from "@core/providers/session";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <Session>
      <Query>{children}</Query>
    </Session>
  );
};

export default Providers;
