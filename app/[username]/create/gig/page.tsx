import Stages from "@core/components/elements/stages";
import General from "./general";
import Showcase from "./showcase";

const Page = () => {
  const panels = [
    { id: 1, title: "General", content: <General /> },
    { id: 2, title: "Showcase", content: <Showcase /> },
    { id: 3, title: "Publish", content: <General /> },
  ];

  return (
    <>
      <section className="contain space-y-4">
        <h1 className="text-4xl font-bold">Create Gig</h1>
        <Stages panels={panels} />
      </section>
    </>
  );
};

export default Page;
