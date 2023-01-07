import Tabs from "@core/components/sections/tabs";
import { Tab } from "@core/types/tab";

const tabLists: Tab[] = [
  { title: "Overview", isActive: true, href: "#" },
  { title: "Description", isActive: false, href: "#" },
  { title: "About the Seller", isActive: false, href: "#" },
  { title: "Reviews", isActive: false, href: "#" },
];

const Gig = () => {
  return (
    <div>
      <Tabs tabLists={tabLists} />
    </div>
  );
};

export default Gig;
