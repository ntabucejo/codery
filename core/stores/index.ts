import freelancer from "./freelancer";
import education from "./freelancer/education";
import employment from "./freelancer/employment";
import testimonial from "./freelancer/testimonial";

const stores = {
  freelancer: {
    base: freelancer,
    employment: employment,
    testimonial: testimonial,
    education: education,
  },
};

export default stores;
