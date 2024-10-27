import { z } from "zod";


export const testimonialsValidationSchema = z.object({
    name: z.string(),
    image: z.string(),
    occupation: z.string(),
    testimonialText: z.string()
});


export const testimonialsUpdateValidationSchema = z.object({
    name: z.string().optional(),
    image: z.string().optional(),
    occupation: z.string().optional(),
    testimonialText: z.string().optional(),
});


export const TestimonialsValidation = {
    testimonialsUpdateValidationSchema,
    testimonialsValidationSchema
};
