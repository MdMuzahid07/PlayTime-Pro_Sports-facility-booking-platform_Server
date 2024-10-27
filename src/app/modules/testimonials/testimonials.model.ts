import mongoose from "mongoose";
import { TestimonialSchema } from "./testimonials.schema";
import { TTestimonials } from "./testimonials.interface";


const TestimonialModel = mongoose.model<TTestimonials>("testimonial", TestimonialSchema);

export default TestimonialModel;