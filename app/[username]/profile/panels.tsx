"use client";
import Badge from "@core/components/elements/badge";
import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Modal from "@core/components/layouts/modal";
import useModal from "@core/hooks/use-modal";
import { Tab } from "@headlessui/react";
import {
  Category,
  Education,
  Employment,
  Freelancer,
  Gig,
  Skill,
  Technology,
  Testimonial,
  Thumbnail,
  User,
} from "@prisma/client";
import { useState } from "react";

type Props = {
  freelancer: Freelancer & {
    educations: Education[];
    employments: Employment[];
    testimonials: Testimonial[];
    skills: (Skill & { technology: Technology | null })[];
  };
  gigs: (Gig & {
    category: Category;
    thumbnails: Thumbnail[];
    freelancer: Freelancer & {
      user: User;
    };
  })[];
};

const Panels = ({ gigs, freelancer }: Props) => {
  const [selectedGig, setSelectedGig] = useState(gigs[0]);
  const editGigModal = useModal();
  const initialFields = {
    title: selectedGig.title,
    description: selectedGig.description,
    from: selectedGig.from,
    to: selectedGig.to,
    period: selectedGig.period,
  };

  const [editFields, setEditFields] = useState(initialFields);

  const panels = [
    { title: "About Me", show: false },
    { title: "Manage Gigs", show: freelancer ?? false },
    { title: "Billing Information", show: false },
  ];

  const handleDeleteGig = async (id: string) => {
    try {
      const response = await fetch(`/api/gigs/${id}/delete`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log(id);
      } else {
        console.error("Failed to delete gig");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditGig = async () => {
    try {
      await fetch(`/api/gigs/${selectedGig.id}/edit`, {
        method: "PUT",
        body: JSON.stringify({
          id: selectedGig.id,
          title: editFields.title,
          description: editFields.description,
          from: +editFields.from,
          to: +editFields.to,
          revision: +editFields.period,
        }),
      });
      editGigModal.handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  console.log({ selectedGig });
  return (
    <section className="contain space-y-4">
      <Tab.Group>
        <Tab.List className="flex items-center gap-4">
          {panels.map((panel) => (
            <Tab
              key={panel.title}
              className={({ selected }) =>
                `${
                  selected
                    ? "bg-primary-dark text-white shadow"
                    : "text-primary-dark hover:bg-white/[0.12] hover:text-primary-dark"
                } w-full rounded-lg py-2.5 text-sm font-medium leading-5  ring-primary-dark ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2`
              }>
              {panel.title}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <h1 className="mb-2 text-lg font-semibold">Skills</h1>
            <section className="flex flex-wrap items-center gap-3">
              {freelancer.skills.map(({ id, technology }) => (
                <Badge
                  key={id}
                  logo="/images/auth/google.svg"
                  name={technology!.name}
                />
              ))}
            </section>

            <h1 className="my-4 text-lg font-semibold">Educations</h1>
            <section className="flex flex-wrap items-center gap-3">
              {freelancer.educations.map((education) => (
                <div
                  key={education.id}
                  className="flex flex-col gap-1 rounded border bg-white py-3 px-6">
                  <h1 className="text-bold font-semibold">
                    {education.degree}
                  </h1>
                  <h2 className="-mt-1 text-sm font-semibold">
                    {education.area}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {education.school}
                  </span>
                  <span className="text-xs text-gray-500">
                    {education.from}-{education.to}
                  </span>
                </div>
              ))}
            </section>

            <h1 className="my-4 text-lg font-semibold">Employments</h1>
            <section className="flex flex-wrap items-center gap-3">
              {freelancer.employments.map((employment) => (
                <div
                  key={employment.id}
                  className="flex flex-col gap-1 rounded border bg-white py-3 px-6">
                  <h1 className="text-bold font-semibold">
                    {employment.position}
                  </h1>
                  <h2 className="-mt-1 text-sm font-semibold">
                    {employment.location}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {employment.description}
                  </span>
                  <span className="text-xs text-gray-500">
                    {employment.from}-{employment.to}
                  </span>
                  <span className="text-sm text-gray-500">
                    {employment.isActive}
                  </span>
                </div>
              ))}
            </section>

            <h1 className="my-4 text-lg font-semibold">Testimonials</h1>
            <section className="flex flex-wrap items-center gap-3">
              {freelancer.testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col gap-1 rounded border bg-white py-3 px-6">
                  <h1 className="text-bold font-semibold">
                    {testimonial.name}
                  </h1>
                  <h2 className="-mt-1 text-sm font-semibold">
                    {testimonial.position}
                  </h2>
                  <span className="text-xs text-gray-500">
                    {testimonial.email}
                  </span>
                  <p className="text-sm text-gray-500">{testimonial.message}</p>
                </div>
              ))}
            </section>
          </Tab.Panel>

          <Tab.Panel>
            <section className="flex flex-col">
              {gigs.map((gig) => (
                <div
                  key={gig.id}
                  className="flex cursor-pointer items-center justify-between p-3 shadow hover:bg-slate-100">
                  <div>
                    <h2 className="font-semibold">{gig.title}</h2>
                    <h6 className="text-xs">{gig.category.name}</h6>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => {
                        setSelectedGig(gig);
                        editGigModal.handleOpen();
                      }}>
                      Edit
                    </Button>
                    <Button onClick={() => handleDeleteGig(gig.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </section>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <Modal
        title="Edit Gig: Details"
        description="You can edit your gig information here."
        state={editGigModal.state}
        handleClose={editGigModal.handleClose}
        className="z-[999] max-w-5xl">
        <div className="z-[999] grid gap-8 laptop:grid-cols-2">
          <Field.Body
            id="title"
            label="Title"
            description="State your Gig Title">
            <Field.Text
              id="title"
              isFull
              defaultValue={selectedGig.title}
              onChange={(event) =>
                setEditFields({ ...editFields, title: event.target.value })
              }
            />
          </Field.Body>

          <Field.Body
            id="description"
            label="Description"
            description="State your Gig Description">
            <Field.Textarea
              id="description"
              isFull
              defaultValue={selectedGig.description}
              onChange={(event) =>
                setEditFields({
                  ...editFields,
                  description: event.target.value,
                })
              }
            />
          </Field.Body>

          <Field.Body
            id="from"
            label="From"
            description="State your Starting Price">
            <Field.Number
              id="from"
              isFull
              defaultValue={selectedGig.from}
              onChange={(event) =>
                setEditFields({ ...editFields, from: +event.target.value })
              }
            />
          </Field.Body>

          <Field.Body id="to" label="to" description="State your Maximum Price">
            <Field.Number
              id="to"
              isFull
              defaultValue={selectedGig.to}
              onChange={(event) =>
                setEditFields({ ...editFields, to: +event.target.value })
              }
            />
          </Field.Body>

          <Field.Body
            id="period"
            label="Revision"
            description="State your Days of Revision">
            <Field.Number
              id="period"
              isFull
              defaultValue={selectedGig.period}
              onChange={(event) =>
                setEditFields({ ...editFields, period: +event.target.value })
              }
            />
          </Field.Body>
        </div>

        <div className="flex w-full gap-4">
          <Button onClick={handleEditGig}>Save Changes</Button>
          <Button
            variant="secondary"
            onClick={() => setEditFields(initialFields)}>
            Clear
          </Button>
          <Button
            variant="tertiary"
            onClick={editGigModal.handleClose}
            className="ml-auto">
            Close
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default Panels;
