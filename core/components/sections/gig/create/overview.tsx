import Button from "@core/components/elements/button";
import Categories from "@core/components/elements/fields/categories";
import Description from "@core/components/elements/fields/description";
import Label from "@core/components/elements/fields/label";
import TextField from "@core/components/elements/fields/textField";
import Tooltip from "@core/components/elements/tooltip";

const Overview = () => {
  return (
    <section className="grid gap-4">
      <div className="flex flex-col gap-8 rounded">
        {/* project title */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Label name="Project Title" />
            <Tooltip>
              <p className="whitespace-nowrap">
                This is about the name of your gig
              </p>
            </Tooltip>
          </div>
          <Description paragraph="This will help your gig to recognize instantaneously." />
          <TextField />
        </div>

        {/* project description */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Label name="Project Description" />
            <Tooltip>
              <p className="whitespace-nowrap">
                This is about the description of your gig
              </p>
            </Tooltip>
          </div>
          <Description paragraph="As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours." />
          <TextField />
        </div>

        <div className="grid gap-6 laptop:grid-cols-2">
          {/* categories */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Label name="Category" />
              <Tooltip>
                <p className="whitespace-wrap w-96">
                  Clients will know what category or language you can do about
                  this gig.
                </p>
              </Tooltip>
            </div>
            <Description paragraph="Choose the category and sub-category most suitable for your Gig." />
            <Categories />
          </div>

          {/* tags */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Label name="Positive Keywords" />
              <Tooltip>
                <p className="whitespace-nowrap">
                  Tags can help your gig to appear in search results often.
                </p>
              </Tooltip>
            </div>
            <Description paragraph="Tag your Gig with buzz words that are relevant to the services you offer. Use all 5 tags to get found." />
            <Categories />
          </div>
        </div>
      </div>
      <Button className="ml-auto mt-4">Save & Continue</Button>
    </section>
  );
};

export default Overview;
