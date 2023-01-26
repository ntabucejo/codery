"use client";
import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import PaymentModal from "@core/components/modals/payment";
import useModal from "@core/hooks/use-modal";

const CustomOffer = () => {
  const modal = useModal();
  const paymentModal = useModal();

  return (
    <>
      <div className="smooth absolute -top-[70px] z-50 flex w-full cursor-pointer items-center justify-between rounded border bg-white p-3 hover:bg-slate-100">
        <h1 className="font-semibold">
          You received a special Offer from Nikko Abucejo
        </h1>
        <Button onClick={modal.handleOpen}>See Details</Button>
      </div>

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

          <Field.Body id="price" label="Price">
            <Field.Number id="client" isFull value={350} isDisabled />
          </Field.Body>

          <Field.Body id="revision" label="Revision">
            <Field.Number id="revision" isFull value={5} isDisabled />
          </Field.Body>

          <Field.Body id="delivery" label="Days of Delivery">
            <Field.Number id="delivery" isFull value={5} isDisabled />
          </Field.Body>

          <Field.Body id="client" label="Description">
            <Field.Textarea
              id="description"
              isFull
              value="I will do the client's frontend website using the latest technologies such as ReactJS, NextJS, TailwindCSS and typeScript. I will not do the design and just a development. "
              isDisabled
            />
          </Field.Body>
        </div>

        <div className="flex w-full gap-4">
          <Button onClick={paymentModal.handleOpen}>Accept Offer</Button>
          <Button variant="secondary" onClick={modal.handleClose}>
            Decline Offer
          </Button>
          <Button
            variant="tertiary"
            onClick={modal.handleClose}
            className="ml-auto">
            Close
          </Button>
        </div>
      </Modal>

      <PaymentModal modal={paymentModal}/>
    </>
  );
};

export default CustomOffer;
