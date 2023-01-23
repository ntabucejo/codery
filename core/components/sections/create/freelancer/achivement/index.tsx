import useModal from "@core/hooks/use-modal";
import {
  type FreelancerFields,
  type FreelancerErrors,
} from "@core/validations/freelancer";
import { type Dispatch, type SetStateAction } from "react";
import Education from "./education";

type Props = {
  fields: FreelancerFields;
  setFields: Dispatch<SetStateAction<FreelancerFields>>;
  errors: FreelancerErrors;
};

const Achievement = ({ fields, setFields, errors }: Props) => {
  const {
    state: educationModalState,
    handleOpen: handleOpenEducationModal,
    handleClose: handleCloseEducationModal,
  } = useModal();

  return (
    <form className="space-y-4">
      <Education
        fields={fields}
        setFields={setFields}
        modalState={educationModalState}
        handleOpenModal={handleOpenEducationModal}
        handleCloseModal={handleCloseEducationModal}
      />
    </form>
  );
};

export default Achievement;
