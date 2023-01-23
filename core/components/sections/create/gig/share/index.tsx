import useModal from "@core/hooks/use-modal";
import { type GigFields } from "@core/validations/gig";
import { type Dispatch, type SetStateAction } from "react";
import Showcase from "./showcase";

type Props = {
  fields: GigFields;
  setFields: Dispatch<SetStateAction<GigFields>>;
};

const Share = ({ fields, setFields }: Props) => {
  const modalShowcase = useModal();

  return (
    <div className="space-y-4">
      <Showcase fields={fields} setFields={setFields} modal={modalShowcase} />
    </div>
  );
};

export default Share;
