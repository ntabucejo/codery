import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import useModal from "@core/hooks/use-modal";
import stores from "@core/stores";
import validate from "@core/utilities/validate";
import useSWR from "swr";
import { ZodIssue } from "zod";
import Card from "../../card";
import Employment from "./employment";

type Props = {
  warnings: ZodIssue[];
};

const Experience = ({ warnings }: Props) => {
  const fields = stores.freelancer.base((state) => state.fields);
  const setFields = stores.freelancer.base((state) => state.setFields);

  const { data: technologies } = useSWR("/api/data/technologies", {
    fallback: [],
  });

  const modalEmployment = useModal();

  return (
    <form className="space-y-4">
      <Field.Body
        id="skills"
        label="Share us your Skills"
        description="In what technologies are you skilled to do?"
        tooltip="Choose from the technologies below, This will take a huge step to get you a client."
        warning={validate(warnings, "skills")}>
        <Field.Select.Multiple
          options={technologies}
          values={fields.skills}
          setValues={setFields.skills}
        />
      </Field.Body>
      <Field.Body
        id="employment"
        label="Employment"
        description="Share us your work experiences. This will be a huge step to get you a client.">
        <Button onClick={modalEmployment.handleOpen}>Add Employment</Button>
        {fields.employments.length ? (
          <ul className="grid grid-cols-5 gap-4">
            {fields.employments.map((employment, index) => (
              <Card
                key={index}
                title={employment.company}
                subtitle={employment.position}
              />
            ))}
          </ul>
        ) : null}
        <Employment modal={modalEmployment} />
      </Field.Body>
    </form>
  );
};

export default Experience;
