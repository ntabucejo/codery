"use client";

import Button from "../../elements/button";
import useModal from "@core/hooks/use-modal";
import Form from "./form";
import {Gig, User } from "@prisma/client";

type Props = {
  client: User;
  gigs: Gig[];
};

const CreateOffer = ({ client, gigs }: Props) => {
  const createOfferModal = useModal();

  return (
    <>
      <Button onClick={() => createOfferModal.handleOpen()}>Offer</Button>

      <Form client={client} modal={createOfferModal} gigs={gigs} />
    </>
  );
};

export default CreateOffer;
