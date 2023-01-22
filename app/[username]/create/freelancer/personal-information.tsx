import Field from "@core/components/elements/field";

const PersonalInformation = () => {
  return (
    <form className="space-y-4">
      <Field.Body
        id="location"
        label="Location"
        description="Where do you live?"
        tooltip="Any information needed here in the form are safe and private.">
        <Field.Text id="location" isFull />
      </Field.Body>
      <Field.Body
        id="biography"
        label="Biography"
        description="Tell me about yourself"
        tooltip="Any information needed here in the form are safe and private.">
        <Field.Textarea id="biography" isFull />
      </Field.Body>
      <Field.Body
        id="phone number"
        label="Phone number"
        description="State your Phone Number"
        tooltip="Any information needed here in the form are safe and private.">
        <Field.Text id="phone number" isFull />
      </Field.Body>
    </form>
  );
};

export default PersonalInformation;
