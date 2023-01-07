import Symbol from "@core/components/elements/symbol";
import { Tab } from "@core/types/tab";
import {
  HandThumbUpIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
import Route from "../navbar/route";

type Props = {
  tabLists: Tab[];
};

const Tabs = ({ tabLists }: Props) => {
  return (
    <div className="contain relative grid grid-cols-[1fr,auto] border-y-2 border-gray-200 py-4">
      <ul className="mr-auto flex items-center gap-4">
        {tabLists.map((tab: Tab) => (
          <Route
            key={tab.title}
            to={tab.title}
            href={tab.href}
            isBold={tab.isActive}
          />
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Symbol Icon={HandThumbUpIcon} size="medium" />
        <Symbol Icon={HeartIcon} size="medium" />
        <Symbol Icon={ShareIcon} size="medium" />
      </div>
    </div>
  );
};

export default Tabs;
