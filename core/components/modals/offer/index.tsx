"use client";

import Button from "../../elements/button";
import useModal from "@core/hooks/use-modal";
import Form from "./form";
import { Freelancer, Gig, Thumbnail, User } from "@prisma/client";

type Props = {
  gig: Gig & {
    thumbnails: Thumbnail[];
    freelancer: Freelancer & {
      user: User;
    };
  };
};
const CreateOffer = ({ gig }: Props) => {
  const createOfferModal = useModal();

  return (
    <>
      <Button onClick={() => createOfferModal.handleOpen()}>Offer</Button>

      <Form modal={createOfferModal} gig={gig} />
    </>
  );
};

export default CreateOffer;
