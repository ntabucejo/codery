import Stages from "@core/components/elements/stages";
import Education from "./education";
import PersonalInformation from "./personal-information";

const About = () => {
  const panels = [
    { id: 1, title: "Personal Information", content: <PersonalInformation /> },
    {
      id: 2,
      title: "Skills and Technologies",
      content: <PersonalInformation />,
    },
    {
      id: 3,
      title: "Education",
      content: <Education />,
    },
  ];

  return (
    <>
      <section className="contain space-y-4">
        <h1 className="text-4xl font-bold">Become a Freelancer</h1>
        <Stages panels={panels} />
      </section>
    </>
  );
};

export default About;
