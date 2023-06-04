import freelancer from "./freelancer";
import education from "./freelancer/education";
import employment from "./freelancer/employment";
import testimonial from "./freelancer/testimonial";
import gig from "./gig";
import thumbnail from "./gig/thumbnail";
import offer from "./offer";
import payment from "./payment";
import review from "./review";

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
  offer: offer,
  payment: payment,
  review: review
};

export default schemas;
