import Button from "@core/components/elements/button";
import Field from "@core/components/elements/field";
import Symbol from "@core/components/elements/symbol";
import Modal from "@core/components/layouts/modal";
import useUpload from "@core/hooks/use-upload";
import { type Modal as ModalType } from "@core/types/modal";
import {
  type GigFields,
  gigFields,
  thumbnailErrors,
  thumbnailSchema,
  type ThumbnailErrors,
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
  modal: ModalType;
};

const Thumbnail = ({ fields, setFields, modal }: Props) => {
  const fileId = "file";
  const [errors, setErrors] = useState<ThumbnailErrors>(thumbnailErrors);

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
    const clearErrors = () => setErrors(thumbnailErrors);
    const result = thumbnailSchema.safeParse(fields.thumbnail);
    if (result.success) {
      clearErrors();
      modal.handleClose();
      const data = await handleUpload(event);
      setFields({
        ...fields,
        thumbnails: [
          ...fields.thumbnails,
          { ...fields.thumbnail, image: data },
        ],
        thumbnail: gigFields.thumbnail,
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
        thumbnail: { ...fields.thumbnail, image: data },
      });
    }
  }, [data]);

  return (
    <Modal
      title="Thumbnail"
      description="Get noticed by the right buyers with visual examples of your services."
      state={modal.state}
      handleClose={modal.handleClose}
      className="max-w-5xl">
      <div className="grid grid-cols-2 gap-8">
        <form
          onSubmit={handleSubmit}
          onChange={handleChange}
          className="row-span-2 space-y-4">
          <Field.Body
            id="image"
            label="Image"
            description="Get noticed by the right buyers with visual examples of your services."
            tooltip="By uploading images you will have a higher chance of getting a client."
            error={errors.image}>
            <Field.File id="upload" name={fileId} />
            <div className="relative grid aspect-video items-center overflow-hidden rounded border">
              {data ? (
                <Image src={data} alt={data} fill className="object-contain" />
              ) : (
                <div className="mx-auto flex flex-col items-center">
                  <Symbol
                    Icon={PhotoIcon}
                    size="large"
                    isHoverDisabled
                    className="animate-bounce"
                  />
                  <span className="text-sm font-semibold text-primary-dark/fade">
                    No Image Uploaded
                  </span>
                </div>
              )}
            </div>
          </Field.Body>
          <div className="absolute bottom-8 left-8 flex gap-4">
            <Button type="submit">
              {loading ? "Uploading" : "Add Thumbnail"}
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                setFields({
                  ...fields,
                  thumbnail: gigFields.thumbnail,
                })
              }>
              Clear
            </Button>
          </div>
        </form>
        <div>
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
              value={fields.thumbnail.title}
              onChange={(event) =>
                setFields({
                  ...fields,
                  thumbnail: {
                    ...fields.thumbnail,
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
              value={fields.thumbnail.description}
              onChange={(event) =>
                setFields({
                  ...fields,
                  thumbnail: {
                    ...fields.thumbnail,
                    description: event.target.value,
                  },
                })
              }
            />
          </Field.Body>
          <Field.Body
            id="repository"
            label="Repository"
            description="Where do you live?"
            tooltip="Any information needed here in the form are safe and private."
            error={errors.title}>
            <Field.Text
              id="repository"
              isFull
              placeholder="Codery Clone Website"
              value={fields.thumbnail.repository}
              onChange={(event) =>
                setFields({
                  ...fields,
                  thumbnail: {
                    ...fields.thumbnail,
                    repository: event.target.value,
                  },
                })
              }
            />
          </Field.Body>
          <Field.Body
            id="website"
            label="Website"
            description="Where do you live?"
            tooltip="Any information needed here in the form are safe and private."
            error={errors.title}>
            <Field.Text
              id="website"
              isFull
              placeholder="Codery Clone Website"
              value={fields.thumbnail.website}
              onChange={(event) =>
                setFields({
                  ...fields,
                  thumbnail: {
                    ...fields.thumbnail,
                    website: event.target.value,
                  },
                })
              }
            />
          </Field.Body>
          <Button
            variant="tertiary"
            onClick={modal.handleClose}
            className="absolute right-8 bottom-8">
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Thumbnail;
