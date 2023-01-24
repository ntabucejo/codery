import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import useModal from "@core/hooks/use-modal";
import stores from "@core/stores";
import validate from "@core/utilities/validate";
import useSWR from "swr";
import { ZodIssue } from "zod";
import Employment from "./employment";

type Props = {
  warnings: ZodIssue[];
};

const Experience = ({ warnings }: Props) => {
  const fields = stores.freelancer.base((state) => state.fields);
  const setFields = stores.freelancer.base((state) => state.setFields);

  const { data: technologies } = useSWR("/api/data/technologies");

  const modalEmployment = useModal();

  return (
    <form className="space-y-4">
      <Field.Body
        id="skills"
        label="Skills"
        description="How much is your starting price? You can negotiate with your client about the final amount later."
        tooltip="All prices should start from 50 dollars."
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
        description="How much is your starting price? You can negotiate with your client about the final amount later."
        tooltip="All prices should start from 50 dollars.">
        <Button onClick={modalEmployment.handleOpen}>Add Employment</Button>
        {fields.employments.length ? (
          <ul className="grid grid-cols-4 gap-4">
            {fields.employments.map((employment, index) => (
              <li key={index} className="space-y-4 rounded border bg-white p-4">
                <div>
                  <h4 className="font-semibold">{employment.position}</h4>
                  <h5 className="text-xs text-primary-dark/fade">
                    {employment.location}
                  </h5>
                </div>
                <p className="text-sm text-primary-dark/fade">
                  {employment.description}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
        <Employment modal={modalEmployment} />
      </Field.Body>
    </form>
  );
};

export default Experience;
