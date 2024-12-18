import { z } from "zod";

const reviewValidationSchema = z.object({
    userId: z.string(),
    facilityOrProductId: z.string(),
    rating: z.enum(["1", "2", "3", "4", "5"]),
    reviewText: z.string(),
});


export const ReviewValidation = {
    reviewValidationSchema
};