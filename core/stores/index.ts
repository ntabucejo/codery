import freelancer from "./freelancer";
import education from "./freelancer/education";
import employment from "./freelancer/employment";
import testimonial from "./freelancer/testimonial";
import gig from "./gig";
import thumbnail from "./gig/thumbnail";

const stores = {
  freelancer: {
    base: freelancer,
    employment: employment,
    testimonial: testimonial,
    education: education,
  },
  gig: {
    base: gig,
    thumbnail: thumbnail,
  },
};

export default stores;
