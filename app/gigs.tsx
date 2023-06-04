"use client";

import Button from "@core/components/elements/button";
import Gigs from "@core/components/sections/gigs";
import { Tab } from "@headlessui/react";
import {
  Category,
  Freelancer,
  Gig,
  Review,
  Thumbnail,
  User,
} from "@prisma/client";
import { useState } from "react";

type Props = {
  categories: Category[];
  gigs: (Gig & {
    category: Category;
    thumbnails: Thumbnail[];
    reviews: Review[];
    freelancer: Freelancer & {
      user: User;
    };
  })[];
};

const FilteredGigs = ({ categories, gigs }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredGigs = gigs.filter(
    (gig) => selectedCategory === gig.category.name
  );

  const handleDeleteAllClient = async () => {
    await fetch("/api/data/delete-all-client", {
      method: "DELETE",
    });
  };

  const handleDeleteAllFreelancer = async () => {
    await fetch("/api/data/delete-all-freelancer", {
      method: "DELETE",
    });
  };

  const handleDeleteAllOffer = async () => {
    await fetch("/api/data/delete-all-offer", {
      method: "DELETE",
    });
  };

  const handleDeleteAllContract = async () => {
    await fetch("/api/data/delete-all-contract", {
      method: "DELETE",
    });
  };
  return (
    <>
      {/* <Button onClick={handleDeleteAllClient}>Delete all clients</Button>
      <Button onClick={handleDeleteAllFreelancer}>
        Delete all freelancers
      </Button>
      <Button onClick={handleDeleteAllOffer}>Delete all offer</Button>
      <Button onClick={handleDeleteAllContract}>Delete all contract</Button> */}
      <Tab.Group>
        <Tab.List className="contain flex items-center overflow-x-scroll rounded-xl p-1 scrollbar-hide">
          <Tab
            className={({ selected }) =>
              `
      ${
        selected
          ? "bg-primary-dark text-white shadow"
          : "text-primary-dark hover:bg-white/[0.12] hover:text-primary-dark"
      }
      w-full rounded-lg py-2.5 text-sm font-medium leading-5  ring-primary-dark ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2`
            }
            onClick={() => setSelectedCategory("")}>
            All
          </Tab>
          {categories.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                `
        ${
          selected
            ? "bg-primary-dark text-white shadow"
            : "text-primary-dark hover:bg-white/[0.12] hover:text-primary-dark"
        }
        w-full rounded-lg py-2.5 text-sm font-medium leading-5  ring-primary-dark ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2`
              }
              onClick={() => setSelectedCategory(category.name)}>
              {category.name}
            </Tab>
          ))}
        </Tab.List>

        <Gigs data={selectedCategory !== "" ? filteredGigs : gigs} />
      </Tab.Group>
    </>
  );
};

export default FilteredGigs;
