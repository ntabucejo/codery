import Review from "./review";

const Reviews = () => {
  return (
    <div className="mt-10 flex flex-col gap-6">
      <h1 className="text-lg font-bold">Reviews</h1>

      <Review
        name="cpnbarbosa"
        location="Cambodia"
        description="Very effective and attentive, with close attention to the problem. 100% recommended and hope to work with again in the future."
      />

      <Review
        name="naturalgraphy"
        location="Sri Lanka"
        description="Quick and calm person and he has everything that I wanted! Hope to work with him again!"
      />

      <Review
        name="naturalgraphy"
        location="Sri Lanka"
        description="Quick and calm person and he has everything that I wanted! Hope to work with him again!"
      />

      <Review
        name="naturalgraphy"
        location="Sri Lanka"
        description="Quick and calm person and he has everything that I wanted! Hope to work with him again!"
      />
    </div>
  );
};

export default Reviews;
