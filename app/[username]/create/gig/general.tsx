import Field from "@core/components/elements/field";

const options = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

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
        id="Project Category"
        label="Project Category"
        description="How much is your starting price? You can negotiate with your client about the final amount later."
        tooltip="All prices should start from 50 dollars.">
        <Field.Select.Combo options={options} />
      </Field.Body>
      <div className="grid grid-cols-4 gap-4">
        <Field.Body
          id="Delivery Period"
          label="Delivery Period"
          description="How much is your starting price? You can negotiate with your client about the final amount later."
          tooltip="All prices should start from 50 dollars."
          className="col-span-2">
          <Field.Select.List options={options} />
        </Field.Body>
        <Field.Body
          id="Technologies"
          label="Technologies"
          description="How much is your starting price? You can negotiate with your client about the final amount later."
          tooltip="All prices should start from 50 dollars."
          className="col-span-2 row-span-2">
          <Field.Select.Multiple options={options} />
        </Field.Body>
        <Field.Body
          id="Price Range"
          label="Price Range"
          description="How much is your starting price? You can negotiate with your client about the final amount later."
          tooltip="All prices should start from 50 dollars."
          className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <Field.Number id="Price Range" isFull />
            <Field.Number id="Price Range" isFull />
          </div>
        </Field.Body>
      </div>
    </form>
  );
};

export default General;
