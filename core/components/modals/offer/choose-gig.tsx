'use client'
import Button from "@core/components/elements/button";
import Modal from "@core/components/layouts/modal";
import Gigs from "@core/components/sections/gigs";
import { type Modal as ModalType } from "@core/types/modal";
import {
  Category,
  Freelancer,
  Gig as GigType,
  Thumbnail,
  User,
} from "@prisma/client";

type Props = {
  modal: ModalType;
  gigs: (GigType & {
    category: Category;
    thumbnails: Thumbnail[];
    freelancer: Freelancer & {
      user: User;
    };
  })[];
  nextModal: ModalType;
};

const ChooseGigModal = ({ modal, gigs, nextModal }: Props) => {
  return (
    <Modal
      title="Custom Offer: Choose Gig"
      description="Choose in your gigs in which this offer belongs."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-5xl">
      <Gigs data={gigs} />

      <div className="flex w-full gap-4">
        <Button onClick={nextModal.handleOpen}>Choose Gig</Button>
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

export default ChooseGigModal;
