import { z } from "zod";


const CartItemValidationSchema = z.object({
    productId: z.string(),
    quantity: z.number(),
    totalPrice: z.number()
});


const CartValidationSchema = z.object({
    userId: z.string(),
    items: z.array(CartItemValidationSchema),
    subtotal: z.number(),
    tax: z.number(),
    shippingCost: z.number(),
    total: z.number(),
    currency: z.string(),
});

export const CartValidation = {
    CartValidationSchema
};