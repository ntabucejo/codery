import Modal from "../../layouts/modal";
import { type Modal as ModalType } from "@core/types/modal";
import Field from "../../elements/field";
import Button from "../../elements/button";
import usePayment from "@core/hooks/use-payment";
import { useState } from "react";
import { Freelancer, User } from "@prisma/client";
import { ZodIssue } from "zod";
import schemas from "@core/validations/schemas";
import validate from "@core/utilities/validate";

type Props = {
  offferId: string;
  modal: ModalType;
  user: User & {
    freelancer: Freelancer | null;
  };
};

const PaymentModal = ({ modal, user, offferId }: Props) => {
  const [warnings, setWarnings] = useState<ZodIssue[]>([]);

  const [fields, setFields] = useState({
    month: 0,
    year: 0,
    cvc: "",
    amount: 0,
    description: "",
  });

  const { handleSubmit } = usePayment({
    user: {
      name: user.name!,
      email: user.email!,
      phone: user.phone!,
    },
    card: {
      number: "4343434343434345",
      expiration: {
        month: fields.month.toString(),
        year: fields.year.toString(),
      },
      cvc: fields.cvc,
    },
    amount: fields.amount,
    description: fields.description,
  });

  const handleValidationSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const result = schemas.payment.safeParse(fields);
    if (result.success) {
      try {
        await handleSubmit(event);
        await acceptOffer();
        modal.handleClose();
      } catch (error) {
        console.log(error);
      }
    } else {
      setWarnings(result.error.issues);
    }
  };

  const acceptOffer = async () => {
    await fetch("/api/payment/accept-offer", {
      method: "PUT",
      body: JSON.stringify({ id: offferId }),
    });
  };

  return (
    <Modal
      title="Custom Offer: Payment"
      description="Proceed with giving out your payment account details to continue."
      state={modal.state}
      handleClose={modal.handleClose}
      className="z-[999] max-w-5xl">
      <div className="grid gap-8 laptop:grid-cols-2">
        <Field.Body
          id="month"
          label="Month Expiry Date"
          warning={validate(warnings, "month")}
          description="State your card's month expiry.">
          <Field.Number
            id="month"
            isFull
            value={+fields.month}
            onChange={(event) =>
              setFields({ ...fields, month: +event.target.value })
            }
          />
        </Field.Body>

        <Field.Body
          id="year"
          label="Year Expiry Date"
          warning={validate(warnings, "year")}
          description="State your card's year expiry.">
          <Field.Number
            id="year"
            isFull
            value={+fields.year}
            onChange={(event) =>
              setFields({ ...fields, year: +event.target.value })
            }
          />
        </Field.Body>

        <Field.Body
          id="cvc"
          label="CVC"
          description="State your card's cvc"
          warning={validate(warnings, "cvc")}>
          <Field.Number
            id="cvc"
            isFull
            value={+fields.cvc}
            onChange={(event) =>
              setFields({ ...fields, cvc: event.target.value })
            }
          />
        </Field.Body>

        <Field.Body
          id="amount"
          label="Amount"
          warning={validate(warnings, "amount")}
          description="How much are you going to send?">
          <Field.Number
            id="delivery"
            isFull
            value={+fields.amount}
            onChange={(event) =>
              setFields({ ...fields, amount: +event.target.value })
            }
          />
        </Field.Body>

        <Field.Body
          id="description"
          label="Description"
          warning={validate(warnings, "description")}
          description="Description of Payment.">
          <Field.Textarea
            id="description"
            isFull
            value={fields.description}
            onChange={(event) =>
              setFields({ ...fields, description: event.target.value })
            }
          />
        </Field.Body>
      </div>

      <div className="flex w-full gap-4">
        <Button onClick={handleValidationSubmit}>Send Payment</Button>
        <Button
          variant="secondary"
          onClick={() =>
            setFields({
              month: 0,
              year: 0,
              cvc: "",
              amount: 0,
              description: "",
            })
          }>
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
