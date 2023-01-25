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
                  <h6 className="text-sm opacity-90">
                    B.Sc - {education.degree?.name}
                  </h6>
                  <h6 className="text-sm text-primary-dark/fade">
                    {education.school}
                  </h6>
                  <h6 className="mt-2 text-xs text-primary-dark/fade">
                    Graduated {education.to.name}
                  </h6>
                </div>
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
              <li key={index} className="space-y-4 rounded border bg-white p-4">
                <div>
                  <h6 className="text-sm opacity-90">{testimonial.name}</h6>
                  <h6 className="text-sm text-primary-dark/fade">
                    {testimonial.position}
                  </h6>
                  <h6 className="mt-2 text-xs text-primary-dark/fade">
                    {testimonial.email}
                  </h6>
                </div>
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
