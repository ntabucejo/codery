import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import useModal from "@core/hooks/use-modal";
import { Modal as ModalType } from "@core/types/modal";
import { Freelancer, Gig, Offer, User } from "@prisma/client";
import PaymentModal from "../payment";

type Props = {
  modal: ModalType;
  offer: Offer & {
    freelancer: Freelancer & {
      user: User;
    };
    gig: Gig;
  };
  user: User & {
    freelancer: Freelancer | null;
  };
};
const RecievedOfferDetailsModal = ({ offer, modal, user }: Props) => {
  if(!offer) return <></>
  
  const paymentModal = useModal();

  return (
    <>
      <Modal
        title="Custom Offer: Details"
        description="State what are the details of your contract between you and your client."
        state={modal.state}
        handleClose={modal.handleClose}
        className="max-w-5xl">
        <div className="grid gap-8 laptop:grid-cols-2">
          <Field.Body id="gig" label="Gig Title">
            <Field.Text id="gig" isFull value={offer.gig.title} isDisabled />
          </Field.Body>

          <Field.Body id="price" label="Price">
            <Field.Number id="price" isFull value={offer.price} isDisabled />
          </Field.Body>

          <Field.Body id="revision" label="Revision">
            <Field.Number
              id="revision"
              isFull
              value={offer.revision}
              isDisabled
            />
          </Field.Body>

          <Field.Body id="delivery" label="Days of Delivery">
            <Field.Number
              id="delivery"
              isFull
              value={offer.deliveryDays}
              isDisabled
            />
          </Field.Body>

          <Field.Body id="client" label="Description">
            <Field.Textarea
              id="description"
              isFull
              value={offer.description}
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

      <PaymentModal user={user} modal={paymentModal} offferId={offer.id} />
    </>
  );
};

export default RecievedOfferDetailsModal;
