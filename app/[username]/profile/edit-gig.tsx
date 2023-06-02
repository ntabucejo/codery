import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import type { Modal as ModalType } from "@core/types/modal";
import { Gig } from "@prisma/client";

type Props = {
  gig: Gig;
  modal: ModalType;
};

const EditGig = ({ gig, modal }: Props) => {
  return (
    <Modal
      title="Edit Gig: Details"
      description="You can edit your gig information here."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-5xl">
      <div className="grid gap-8 laptop:grid-cols-2">
        <Field.Body id="title" label="Title" description="State your Gig Title">
          <Field.Text id="client" isFull value={gig.title} />
        </Field.Body>
      </div>

      <div className="flex w-full gap-4">
        <Button onClick={modal.handleClose}>Save Changes</Button>
        <Button variant="secondary" onClick={modal.handleClose}>
          Clear
        </Button>
        <Button
          variant="tertiary"
          onClick={modal.handleClose}
          className="ml-auto">
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default EditGig;
