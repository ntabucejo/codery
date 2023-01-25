import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import useModal from "@core/hooks/use-modal";
import stores from "@core/stores";
import { ZodIssue } from "zod";
import Education from "./education";
import Testimonial from "./testimonial";

type Props = {
  warnings: ZodIssue[];
};
const Achievement = ({ warnings }: Props) => {
  const fields = stores.freelancer.base((state) => state.fields);

  const modalEducation = useModal();
  const modalTestimonial = useModal();

  return (
    <form className="space-y-4">
      <Field.Body
        id="education"
        label="Education"
        description="Describe your educational background. It will help clients get to know you!"
        tooltip="Describe your educational background. It will help clients get to know you!">
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
        <Education modal={modalEducation} />
      </Field.Body>
      <Field.Body
        id="testimonial"
        label="Testimonial"
        description="Share us all the testimonials you receive. This will take an advantage to the client's."
        tooltip="Share us all the testimonials you receive. This will take an advantage to the client's.">
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
        <Testimonial modal={modalTestimonial} />
      </Field.Body>
    </form>
  );
};

export default Achievement;
