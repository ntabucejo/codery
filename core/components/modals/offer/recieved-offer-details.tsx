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
  if (!offer) return <></>;

  const paymentModal = useModal();
  const paymentRulesModal = useModal();

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
          <Button onClick={paymentRulesModal.handleOpen}>
            Accept Offer and Pay
          </Button>
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

      <Modal
        title="Rules and Regulations: Payment"
        description="By Clicking Continue, this will prove that you agreed to our rules and regulations before paying."
        state={paymentRulesModal.state}
        handleClose={paymentRulesModal.handleClose}
        className="z-[999] max-w-5xl">
        <div className="flex flex-col items-center gap-5">
          <div className="h-96 overflow-y-scroll">
            <p>
              Codery Rules and Regulations of Payment
              <br />
              <br />
              <span className="font-semibold">1. Payment Process</span>
              <br />
              1.1 All payments between clients and freelancers on Codery must be
              processed through the platform's designated payment system.
              <br />
              1.2 Clients are required to provide valid payment information and
              authorize payments for the services rendered by the freelancer.
              <br />
              1.3 Freelancers must ensure that the payment details provided are
              accurate and up to date.
              <br />
              <br />
              <span className="font-semibold">2. Service Fees</span>
              <br />
              2.1 Codery charges a service fee for each successful transaction
              conducted on the platform. The fee structure will be clearly
              outlined and communicated to freelancers and clients.
              <br />
              2.2 The service fee will be deducted automatically from the total
              payment made by the client to the freelancer.
              <br />
              <br />
              <span className="font-semibold">3. Payment Disputes</span>
              <br />
              3.1 In the event of a payment dispute, both the client and the
              freelancer should attempt to resolve the matter amicably and
              professionally.
              <br />
              3.2 If a resolution cannot be reached, either party may raise a
              dispute with Codery, providing relevant evidence and documentation
              to support their claim.
              <br />
              3.3 Codery will review the dispute and make a fair and impartial
              decision based on the available information.
              <br />
              3.4 The decision made by Codery in payment dispute cases will be
              final and binding.
              <br />
              <br />
              <span className="font-semibold">
                4. Payment Security and Confidentiality
              </span>
              <br />
              4.1 Codery takes payment security seriously and employs
              industry-standard measures to protect payment information.
              <br />
              4.2 Freelancers and clients should also take precautions to ensure
              the security and confidentiality of their payment-related
              communications and information.
              <br />
              <br />
              <span className="font-semibold">
                5. Refunds and Cancellations
              </span>
              <br />
              5.1 Refunds and cancellations are subject to the specific terms
              and conditions agreed upon between the client and the freelancer.
              <br />
              5.2 Freelancers should clearly communicate their refund policy,
              including any conditions or fees associated with cancellations or
              partial refunds.
              <br />
              5.3 Codery is not responsible for issuing refunds or mediating
              disputes related to refunds, as this is primarily the
              responsibility of the freelancer and the client.
              <br />
              <br />
              <span className="font-semibold">6. Tax Obligations</span>
              <br />
              6.1 Freelancers are solely responsible for complying with their
              tax obligations related to the income received through Codery.
              <br />
              6.2 Freelancers should consult with their tax advisors to
              understand and fulfill their tax obligations in their respective
              jurisdictions.
              <br />
            </p>
          </div>
          <Button
            onClick={() => {
              paymentRulesModal.handleClose();
              paymentModal.handleOpen();
            }}>
            I agree and Continue
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default RecievedOfferDetailsModal;
