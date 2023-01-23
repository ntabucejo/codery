import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Symbol from "@core/components/elements/symbol";
import Modal from "@core/components/layouts/modal";
import useUpload from "@core/hooks/use-upload";
import { type State } from "@core/types/modal";
import {
  type GigFields,
  type ShowcaseErrors,
  showcaseErrors,
  showcaseSchema,
  gigFields,
} from "@core/validations/gig";
import { PhotoIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import {
  type Dispatch,
  type SetStateAction,
  useState,
  useEffect,
  type FormEvent,
} from "react";

type Props = {
  fields: GigFields;
  setFields: Dispatch<SetStateAction<GigFields>>;
  modalState: State;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

const Showcase = ({
  fields,
  setFields,
  modalState,
  handleOpenModal,
  handleCloseModal,
}: Props) => {
  const fileId = "file";
  const [errors, setErrors] = useState<ShowcaseErrors>(showcaseErrors);

  const {
    data,
    loading,
    handleSubmit: handleUpload,
    handleChange,
  } = useUpload.image({
    name: fileId,
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const clearErrors = () => setErrors(showcaseErrors);
    const result = showcaseSchema.safeParse(fields.showcase);
    if (result.success) {
      clearErrors();
      handleCloseModal();
      const data = await handleUpload(event);
      setFields({
        ...fields,
        showcases: [...fields.showcases, { ...fields.showcase, image: data }],
        showcase: gigFields.showcase,
      });
      return;
    }
    const validations = result.error.issues;
    const updatedErrors = validations.map((validation) => {
      return { name: validation.path[0], message: validation.message };
    });
    clearErrors();
    for (const error of updatedErrors) {
      setErrors((state) => ({ ...state, [error.name]: error.message }));
    }
  };

  useEffect(() => {
    if (data) {
      setFields({
        ...fields,
        showcase: { ...fields.showcase, image: data },
      });
    }
  }, [data]);

  return (
    <Field.Body
      id="showcase"
      label="Showcase"
      description="Get noticed by the right buyers with visual examples of your services."
      tooltip="By uploading images you will have a higher chance of getting a client.">
      <Button onClick={handleOpenModal}>Add Showcase</Button>
      <ul className="grid grid-cols-4 gap-4">
        {fields.showcases.length
          ? fields.showcases.map((showcase) => (
              <li
                key={showcase.image}
                className="relative grid aspect-video items-center overflow-hidden rounded border bg-white">
                <Image
                  src={showcase.image}
                  alt={showcase.image}
                  fill
                  className="object-contain"
                />
              </li>
            ))
          : null}
      </ul>
      <Modal
        title="Showcase"
        description="Get noticed by the right buyers with visual examples of your services."
        state={modalState}
        handleClose={handleCloseModal}
        className="max-w-2xl">
        <Field.Body
          id="title"
          label="Title"
          description="Where do you live?"
          tooltip="Any information needed here in the form are safe and private."
          error={errors.title}>
          <Field.Text
            id="title"
            isFull
            placeholder="Codery Clone Website"
            value={fields.showcase.title}
            onChange={(event) =>
              setFields({
                ...fields,
                showcase: {
                  ...fields.showcase,
                  title: event.target.value,
                },
              })
            }
          />
        </Field.Body>
        <Field.Body
          id="description"
          label="Description"
          description="Where do you live?"
          tooltip="Any information needed here in the form are safe and private."
          error={errors.description}>
          <Field.Textarea
            id="position"
            isFull
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, non. Vitae ut perspiciatis recusandae non incidunt deleniti possimus debitis magnam eos, aspernatur, quidem, dicta rem molestiae consectetur quibusdam? Consectetur, molestias!"
            value={fields.showcase.description}
            onChange={(event) =>
              setFields({
                ...fields,
                showcase: {
                  ...fields.showcase,
                  description: event.target.value,
                },
              })
            }
          />
        </Field.Body>
        <form
          onSubmit={handleSubmit}
          onChange={handleChange}
          className="space-y-4">
          <Field.Body
            id="upload"
            label="Upload"
            description="Get noticed by the right buyers with visual examples of your services."
            tooltip="By uploading images you will have a higher chance of getting a client."
            error={errors.image}>
            <Field.File id="upload" name={fileId} />
            <div className="relative grid aspect-video items-center overflow-hidden rounded border">
              {data ? (
                <Image src={data} alt={data} fill className="object-contain" />
              ) : (
                <div className="mx-auto flex flex-col items-center">
                  <Symbol Icon={PhotoIcon} size="large" isHoverDisabled />
                  <span className="text-sm font-semibold text-primary-dark/fade">
                    No Image Uploaded
                  </span>
                </div>
              )}
            </div>
          </Field.Body>
          <div className="flex w-full gap-4">
            <Button type="submit">
              {loading ? "Uploading" : "Add Showcase"}
            </Button>
            <Button variant="secondary">Clear</Button>
            <Button
              variant="tertiary"
              onClick={handleCloseModal}
              className="ml-auto">
              Close
            </Button>
          </div>
        </form>
      </Modal>
    </Field.Body>
  );
};

export default Showcase;
