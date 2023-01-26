"use client";
import Button from "../elements/button";
import Modal from "../layouts/modal";
import useModal from "@core/hooks/use-modal";
import Field from "../elements/field";
import {
  Category,
  Freelancer,
  Gig as GigType,
  Thumbnail,
  User,
} from "@prisma/client";
import Gigs from "../sections/gigs";

type Props = {
  gigs: (GigType & {
    category: Category;
    thumbnails: Thumbnail[];
    freelancer: Freelancer & {
      user: User;
    };
  })[];
};

const CreateOffer = ({ gigs }: Props) => {
  const chooseGigModal = useModal();
  const detailsModal = useModal();

  return (
    <div>
      <Button onClick={chooseGigModal.handleOpen}>Create Offer</Button>

      {/* choose for gig */}
      <Modal
        title="Custom Offer: Choose Gig"
        description="Choose in your gigs in which this offer belongs."
        state={chooseGigModal.state}
        handleClose={chooseGigModal.handleClose}
        className="max-w-5xl">
        <Gigs data={gigs} />

        <div className="flex w-full gap-4">
          <Button onClick={detailsModal.handleOpen}>Choose Gig</Button>
          <Button
            variant="tertiary"
            onClick={chooseGigModal.handleClose}
            className="ml-auto">
            Close
          </Button>
        </div>
      </Modal>

      {/* custom offer details */}
      <Modal
        title="Custom Offer: Details"
        description="State what are the details of your contract between you and your client."
        state={detailsModal.state}
        handleClose={detailsModal.handleClose}
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
          <Button onClick={detailsModal.handleClose}>Create Offer</Button>
          <Button variant="secondary" onClick={detailsModal.handleClose}>
            Clear
          </Button>
          <Button
            variant="tertiary"
            onClick={detailsModal.handleClose}
            className="ml-auto">
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CreateOffer;
