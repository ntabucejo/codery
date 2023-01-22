import Field from "@core/components/elements/field";

const General = () => {
  return (
    <form className="space-y-4">
      <Field.Body
        id="Project Title"
        label="Project Title"
        description="This will help your gig to recognize instantaneously."
        tooltip="This is about the description of your gig">
        <Field.Text id="Project Title" isFull />
      </Field.Body>
      <Field.Body
        id="Project Description"
        label="Project Description"
        description="Briefly Describe Your Gig."
        tooltip="Clients will know what category or language you can do about this gig.">
        <Field.Textarea id="Project Description" isFull />
      </Field.Body>
      <Field.Body
        id="Starting Price"
        label="Starting Price"
        description="How much is your starting price? You can negotiate with your client about the final amount later."
        tooltip="All prices should start from 50 dollars.">
        <Field.Number id="Starting Price" />
      </Field.Body>
    </form>
  );
};

export default General;
