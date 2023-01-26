import Modal from "../layouts/modal";
import { type Modal as ModalType } from "@core/types/modal";
import Field from "../elements/field";
import Button from "../elements/button";

type Props = {
  modal: ModalType;
};

const PaymentModal = ({ modal }: Props) => {
  return (
    <Modal
      title="Custom Offer: Payment"
      description="Proceed with giving out your payment account details to continue."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-5xl">
      <div className="grid gap-8 laptop:grid-cols-2">
        <Field.Body
          id="name"
          label="Full Name"
          description="State your full name.">
          <Field.Text
            id="name"
            isFull
            placeholder="Name"
            value="Jazztine Cruz"
            isDisabled
          />
        </Field.Body>

        <Field.Body
          id="account number"
          label="Account Number"
          description="State your Account's Number">
          <Field.Number id="client" isFull value={412684530321} isDisabled />
        </Field.Body>

        <Field.Body
          id="bank type"
          label="Bank Name"
          description="Tell us the Bank Name">
          <Field.Text id="bank" isFull value="Paypal" isDisabled />
        </Field.Body>

        <Field.Body
          id="amount"
          label="Amount"
          description="How much are you going to send?">
          <Field.Number id="delivery" isFull value={350} />
        </Field.Body>
      </div>

      <div className="flex w-full gap-4">
        <Button onClick={modal.handleClose}>Send Payment</Button>
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

export default PaymentModal;
