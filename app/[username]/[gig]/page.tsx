import Overview from "@core/components/sections/gig-overview";
import Menu from "@core/components/sections/menu";

const list = ["Overview", "Description", "Reviews"];

const Gig = () => {
  return (
    <div>
      <Menu tabs={list} />
      <Overview/>
    </div>
  );
};

export default Gig;
