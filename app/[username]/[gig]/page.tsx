import Menu from "@core/components/sections/menu";

const list = ["Overview", "Description", "Reviews"];

const Gig = () => {
  return (
    <div>
      <Menu tabs={list} />
    </div>
  );
};

export default Gig;
