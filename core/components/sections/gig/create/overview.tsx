import Button from "@core/components/elements/button";
import Categories from "@core/components/elements/fields/categories";
import Description from "@core/components/elements/fields/description";
import Label from "@core/components/elements/fields/label";
import NumberField from "@core/components/elements/fields/number";
import TextAreaField from "@core/components/elements/fields/textarea";
import TextField from "@core/components/elements/fields/text";
import Tooltip from "@core/components/elements/tooltip";
import React from "react";

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
          <TextField placeholder="I will create you ..." />
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
          <Description paragraph="Briefly Describe Your Gig" />
          <TextAreaField
            placeholder="Description of your gig"
          />
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

        {/* project price */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Label name="Starting Price" />
            <Tooltip>
              <p className="whitespace-nowrap">
                All prices should start from 50 dollars.
              </p>
            </Tooltip>
          </div>
          <Description paragraph="How much is your starting price? You can negotiate with your client about the final amount later." />
          <NumberField />
        </div>
      </div>
      <Button className="ml-auto mt-4">Save & Continue</Button>
    </section>
  );
};

export default Overview;
