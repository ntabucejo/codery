'use client'
import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import { type Modal as ModalType } from "@core/types/modal";

type Props = {
  modal: ModalType;
};

const OfferDetailsModal = ({ modal }: Props) => {
  return (
    <Modal
      title="Custom Offer: Details"
      description="State what are the details of your contract between you and your client."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-5xl">
      <div className="grid gap-8 laptop:grid-cols-2">
        <Field.Body
          id="client"
          label="Client Full Name"
          description="State the client's full name.">
          <Field.Text
            id="client"
            isFull
            placeholder="Name"
            value="David Robertson"
            isDisabled
          />
        </Field.Body>

        <Field.Body
          id="price"
          label="Price"
          description="State the offer's price.">
          <Field.Number id="client" isFull value={350} />
        </Field.Body>

        <Field.Body
          id="revision"
          label="Revision"
          description="State how many times of revision covered to your contract.">
          <Field.Number id="revision" isFull value={5} />
        </Field.Body>

        <Field.Body
          id="delivery"
          label="Days of Delivery"
          description="State how many days you can delivered the product to your client.">
          <Field.Number id="delivery" isFull value={5} />
        </Field.Body>

        <Field.Body
          id="client"
          label="Description"
          description="State all the details that's been discussed between you and your client.">
          <Field.Textarea
            id="description"
            isFull
            placeholder="Lorem Ipsum"
            value="I will do the client's frontend website using the latest technologies such as ReactJS, NextJS, TailwindCSS and typeScript. I will not do the design and just a development. "
          />
        </Field.Body>
      </div>

      <div className="flex w-full gap-4">
        <Button onClick={modal.handleClose}>Create Offer</Button>
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

export default OfferDetailsModal;
