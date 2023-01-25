import Label from "../label";
import Review from "./review";

const Reviews = () => {
  return (
    <section className="contain space-y-4">
      <Label>Reviews</Label>
      <Review
        name="cpnbarbosa"
        location="Cambodia"
        comment="Very effective and attentive, with close attention to the problem. 100% recommended and hope to work with again in the future."
      />
      <Review
        name="naturalgraphy"
        location="Sri Lanka"
        comment="Quick and calm person and he has everything that I wanted! Hope to work with him again!"
      />
      <Review
        name="naturalgraphy"
        location="Sri Lanka"
        comment="Quick and calm person and he has everything that I wanted! Hope to work with him again!"
      />
      <Review
        name="naturalgraphy"
        location="Sri Lanka"
        comment="Quick and calm person and he has everything that I wanted! Hope to work with him again!"
      />
    </section>
  );
};

export default Reviews;
