"use client";
import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Symbol from "@core/components/elements/symbol";
import Modal from "@core/components/layouts/modal";
import useModal from "@core/hooks/use-modal";
import { Education } from "@core/types/education";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Education = () => {
  const { state, handleOpen, handleClose } = useModal();
  const initialValues: Education = {
    id: 1,
    university: "",
    major: "",
    location: "",
    title: "",
    graduated: "",
  };

  const [allEducation, setAllEducation] = useState<Education[]>([]);
  const [newEducation, setNewEducation] = useState(initialValues);

  return (
    <div className="space-y-4">
      <form className="mb-10 grid space-y-4">
        <Field.Body
          id="University"
          label="University Name"
          description="State your University name."
          tooltip="Any information needed here in the form are safe and private.">
          <Field.Text
            id="University"
            isFull
            onChange={(event) =>
              setNewEducation({
                ...newEducation,
                university: event?.target.value,
              })
            }
          />
        </Field.Body>
        <div className="flex flex-col items-center gap-4 tablet:flex-row">
          <Field.Body
            id="Title"
            label="Title"
            description="State your Field's Title."
            tooltip="Any information needed here in the form are safe and private.">
            <Field.Text
              id="title"
              isFull
              onChange={(event) =>
                setNewEducation({
                  ...newEducation,
                  title: event?.target.value,
                })
              }
            />
          </Field.Body>
          <Field.Body
            id="Major"
            label="Major"
            description="State your Field's Major."
            tooltip="Any information needed here in the form are safe and private.">
            <Field.Text
              id="Major"
              isFull
              onChange={(event) =>
                setNewEducation({ ...newEducation, major: event?.target.value })
              }
            />
          </Field.Body>
        </div>
        <Field.Body
          id="Location"
          label="Location"
          description="State your University Location."
          tooltip="Any information needed here in the form are safe and private.">
          <Field.Text
            id="Location"
            isFull
            onChange={(event) =>
              setNewEducation({
                ...newEducation,
                location: event?.target.value,
              })
            }
          />
        </Field.Body>
        <Field.Body
          id="Year of Graduation"
          label="Year of Graduation"
          description="State your Year of Graduation."
          tooltip="Any information needed here in the form are safe and private.">
          <Field.Date
            id="Year of Graduation"
            isFull
            onChange={(event) =>
              setNewEducation({
                ...newEducation,
                graduated: event?.target.value,
              })
            }
          />
        </Field.Body>

        <div className="flex items-center gap-4">
          <Button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              setAllEducation([...allEducation, newEducation]);
            }}>
            Add Education
          </Button>
          <Button
            variant="secondary"
            onClick={(event) => {
              event.preventDefault();
            }}>
            Reset Form
          </Button>
        </div>
      </form>

      <h5>
        All <span className="font-semibold">({allEducation.length})</span>
      </h5>

      {/* all educations */}
      <div className="flex flex-wrap items-center gap-4">
        {allEducation.map((education, index) => (
          <div key={index}>
            <div className="flex flex-col rounded border bg-white p-4 text-sm text-primary-dark/75">
              <div className="mb-1 flex items-center">
                <span className="mr-auto font-medium text-primary-dark">
                  {education.title} - {education.major}
                </span>
                <Button variant="icon" onClick={handleOpen}>
                  <Symbol Icon={PencilSquareIcon} size="small" />
                  <span className="text-primary-dark/50">Edit</span>
                </Button>
              </div>
              <span>
                {education.university}, {education.location}
              </span>
              <span>Graduated {education.graduated}</span>
            </div>

            <Modal
              title={education.university}
              state={state}
              handleClose={handleClose}
              className="max-w-lg">
              <form className="grid space-y-4">
                <Field.Body
                  id="University"
                  label="University Name"
                  description="State your University name."
                  tooltip="Any information needed here in the form are safe and private.">
                  <Field.Text
                    id="University"
                    isFull
                    defaultValue={education.university}
                  />
                </Field.Body>
                <div className="flex flex-col items-center gap-4 tablet:flex-row">
                  <Field.Body
                    id="Title"
                    label="Title"
                    description="State your Field's Title."
                    tooltip="Any information needed here in the form are safe and private.">
                    <Field.Text
                      id="title"
                      isFull
                      defaultValue={education.title}
                    />
                  </Field.Body>
                  <Field.Body
                    id="Major"
                    label="Major"
                    description="State your Field's Major."
                    tooltip="Any information needed here in the form are safe and private.">
                    <Field.Text
                      id="Major"
                      isFull
                      defaultValue={education.major}
                    />
                  </Field.Body>
                </div>
                <Field.Body
                  id="Location"
                  label="Location"
                  description="State your University Location."
                  tooltip="Any information needed here in the form are safe and private.">
                  <Field.Text
                    id="Location"
                    isFull
                    defaultValue={education.location}
                  />
                </Field.Body>
                <Field.Body
                  id="Year of Graduation"
                  label="Year of Graduation"
                  description="State your Year of Graduation."
                  tooltip="Any information needed here in the form are safe and private.">
                  <Field.Date
                    id="Year of Graduation"
                    isFull
                    defaultValue={education.graduated}
                  />
                </Field.Body>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button>Save Changes</Button>
                    <Button variant="secondary">Reset Form</Button>
                  </div>
                  <Button variant="icon">
                    <Symbol Icon={TrashIcon} size="medium" />
                  </Button>
                </div>
              </form>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
