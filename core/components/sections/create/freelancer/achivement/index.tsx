import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import useModal from "@core/hooks/use-modal";
import {
  type FreelancerFields,
  type FreelancerErrors,
} from "@core/validations/freelancer";
import { type Dispatch, type SetStateAction } from "react";
import Education from "./education";
import Testimonial from "./testimonial";

type Props = {
  fields: FreelancerFields;
  setFields: Dispatch<SetStateAction<FreelancerFields>>;
  errors: FreelancerErrors;
};

const Achievement = ({ fields, setFields, errors }: Props) => {
  const modalEducation = useModal();
  const modalTestimonial = useModal();

  return (
    <form className="space-y-4">
      <Field.Body
        id="education"
        label="Education"
        description="How much is your starting price? You can negotiate with your client about the final amount later."
        tooltip="All prices should start from 50 dollars."
        error={errors.educations}>
        <Button onClick={modalEducation.handleOpen}>Add Education</Button>
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
        <Education
          fields={fields}
          setFields={setFields}
          modal={modalEducation}
        />
      </Field.Body>
      <Field.Body
        id="testimonial"
        label="Testimonial"
        description="How much is your starting price? You can negotiate with your client about the final amount later."
        tooltip="All prices should start from 50 dollars."
        error={errors.testimonials}>
        <Button onClick={modalTestimonial.handleOpen}>Add Testimonial</Button>
        {fields.testimonials.length ? (
          <ul className="grid grid-cols-4 gap-4">
            {fields.testimonials.map((testimonial, index) => (
              <li key={index} className="rounded border bg-white p-4">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <h5 className="text-xs text-primary-dark/fade">
                  {testimonial.email}
                </h5>
              </li>
            ))}
          </ul>
        ) : null}
        <Testimonial
          fields={fields}
          setFields={setFields}
          modal={modalTestimonial}
        />
      </Field.Body>
    </form>
  );
};

export default Achievement;
