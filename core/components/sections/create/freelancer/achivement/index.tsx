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
      <Education fields={fields} setFields={setFields} modal={modalEducation} />
      <Testimonial
        fields={fields}
        setFields={setFields}
        modal={modalTestimonial}
      />
    </form>
  );
};

export default Achievement;
