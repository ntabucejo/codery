import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import stores from "@core/stores";
import validate from "@core/utilities/validate";
import { MouseEvent } from "react";
import { ZodIssue } from "zod";

type Props = {
  handleSubmit: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
  warnings: ZodIssue[];
};

const Overview = ({ warnings, handleSubmit }: Props) => {
  const fields = stores.freelancer.base((state) => state.fields);

  return (
    <div className="space-y-4">
      <Field.Body
        id="biography"
        label="Biography"
        warning={validate(warnings, "biography")}>
        <Field.Textarea
          id="biography"
          isFull
          value={fields.biography}
          isDisabled
        />
      </Field.Body>

      <div className="grid grid-cols-2 gap-8">
        <Field.Body
          id="location"
          label="Location"
          warning={validate(warnings, "location")}>
          <Field.Text id="location" isFull value={fields.location} isDisabled />
        </Field.Body>
        <Field.Body
          id="phone"
          label="Phone"
          warning={validate(warnings, "phone")}>
          <Field.Text id="phone" isFull value={fields.phone} isDisabled />
        </Field.Body>
      </div>

      <Field.Body
        id="skills"
        label="Skills"
        warning={validate(warnings, "skills")}>
        <Field.Select.Multiple values={fields.skills} isDisabled />
      </Field.Body>

      <Field.Body id="employments" label="Employments">
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
      </Field.Body>

      <Field.Body id="education" label="Educations">
        {fields.educations.length ? (
          <ul className="grid grid-cols-4 gap-4">
            {fields.educations.map((education, index) => (
              <li key={index} className="space-y-4 rounded border bg-white p-4">
                <div>
                  <h4 className="font-semibold">{education.school}</h4>
                  <h5 className="text-xs text-primary-dark/fade">
                    {education.degree?.name}
                  </h5>
                </div>
                <p className="text-sm text-primary-dark/fade">
                  {education.area?.name}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </Field.Body>

      <div className="flex items-center gap-2">
        <Button onClick={handleSubmit}>Become a Freelancer</Button>
        <Button variant="secondary" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Overview;
