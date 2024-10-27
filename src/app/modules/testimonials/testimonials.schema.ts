import mongoose from "mongoose";
import { TTestimonials } from "./testimonials.interface";


export const TestimonialSchema = new mongoose.Schema<TTestimonials>(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        occupation: {
            type: String,
            required: true
        },
        testimonialText: {
            type: String,
            required: true
        },
        publish: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

