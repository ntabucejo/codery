import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import useModal from "@core/hooks/use-modal";
import {
  FreelancerErrors,
  type FreelancerFields,
} from "@core/validations/freelancer";
import cuid from "cuid";
import { type Dispatch, type SetStateAction } from "react";
import Employment from "./employment";
import Testimonial from "./testimonial";

type Props = {
  fields: FreelancerFields;
  setFields: Dispatch<SetStateAction<FreelancerFields>>;
  errors: FreelancerErrors;
};

const options = [
  { id: cuid(), name: "Wade Cooper" },
  { id: cuid(), name: "Arlene Mccoy" },
  { id: cuid(), name: "Devon Webb" },
  { id: cuid(), name: "Tom Cook" },
  { id: cuid(), name: "Tanya Fox" },
  { id: cuid(), name: "Hellen Schmidt" },
];

const Experience = ({ fields, setFields, errors }: Props) => {
  const {
    state: testimonialModalState,
    handleOpen: handleOpenTestimonialModal,
    handleClose: handleCloseTestimonialModal,
  } = useModal();

  const {
    state: employmentModalState,
    handleOpen: handleOpenEmploymentModal,
    handleClose: handleCloseEmploymentModal,
  } = useModal();

  return (
    <form className="space-y-4">
      <Field.Body
        id="skills"
        label="Skills"
        description="How much is your starting price? You can negotiate with your client about the final amount later."
        tooltip="All prices should start from 50 dollars."
        error={errors["skills"]}>
        <Field.Select.Multiple
          options={options}
          keys={["skills"]}
          value={fields.skills}
          setValue={setFields}
        />
      </Field.Body>
      <Testimonial
        fields={fields}
        setFields={setFields}
        modalState={testimonialModalState}
        handleOpenModal={handleOpenTestimonialModal}
        handleCloseModal={handleCloseTestimonialModal}
      />
      <Employment
        fields={fields}
        setFields={setFields}
        modalState={employmentModalState}
        handleOpenModal={handleOpenEmploymentModal}
        handleCloseModal={handleCloseEmploymentModal}
      />
    </form>
  );
};

export default Experience;
