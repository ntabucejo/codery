import freelancer from "./freelancer";
import education from "./freelancer/education";
import employment from "./freelancer/employment";
import testimonial from "./freelancer/testimonial";
import gig from "./gig";
import thumbnail from "./gig/thumbnail";

const schemas = {
  freelancer: {
    base: freelancer,
    testimonial: testimonial,
    education: education,
    employment: employment,
  },
  gig: {
    base: gig,
    thumbnail: thumbnail,
  },
};

export default schemas;
