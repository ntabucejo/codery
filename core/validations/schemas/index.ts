import freelancer from "./freelancer";
import education from "./freelancer/education";
import employment from "./freelancer/employment";
import testimonial from "./freelancer/testimonial";

const schemas = {
  freelancer: {
    base: freelancer,
    testimonial: testimonial,
    education: education,
    employment: employment,
  },
};

export default schemas;
