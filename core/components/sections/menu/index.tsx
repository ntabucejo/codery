import Symbol from "@core/components/elements/symbol";
import {
  HandThumbUpIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Route from "../../elements/route";

type Props = {
  tabs: string[];
};

const Menu = ({ tabs }: Props) => {
  return (
    <div className="contain relative grid grid-cols-[1fr,auto] border-y-2 border-gray-200 py-4">
      <ul className="mr-auto flex items-center gap-4">
        {tabs.map((tab) => {
          const href = tab.split(" ").join("-").toLowerCase();
          return <Route key={tab} to={tab} href={href} isBold={false} />;
        })}
      </ul>

      <div className="flex items-center gap-4">
        <Symbol Icon={HandThumbUpIcon} size="medium" />
        <Symbol Icon={HeartIcon} size="medium" />
        <Symbol Icon={ShareIcon} size="medium" />
      </div>
    </div>
  );
};

export default Menu;
