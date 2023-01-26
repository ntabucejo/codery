"use client";
import Button from "../../elements/button";
import Modal from "../../layouts/modal";
import useModal from "@core/hooks/use-modal";
import Field from "../../elements/field";
import {
  Category,
  Freelancer,
  Gig as GigType,
  Thumbnail,
  User,
} from "@prisma/client";
import Gigs from "../../sections/gigs";
import ChooseGigModal from "./choose-gig";
import OfferDetailsModal from "./details";

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
      <ChooseGigModal
        modal={chooseGigModal}
        nextModal={detailsModal}
        gigs={gigs}
      />

      {/* custom offer details */}
      <OfferDetailsModal modal={detailsModal} />
    </div>
  );
};

export default CreateOffer;
