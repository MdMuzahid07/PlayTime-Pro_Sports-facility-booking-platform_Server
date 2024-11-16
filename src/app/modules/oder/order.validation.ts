import { z } from "zod";

const AddressValidationSchema = z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    country: z.string(),
});

const CustomerDetailsValidationSchema = z.object({
    userId: z.string(),
    // name: z.string(),
    // email: z.string(),
    // phoneNumber: z.string(),
    address: AddressValidationSchema
});


// enum

const PaymentMethodsValidationSchema = z.enum(["Stripe", "COD", "Pending"]).optional();
const PaymentStatusValidationSchema = z.enum(["Paid", "Pending", "Failed"]).optional();
const OrderStatusValidationSchema = z.enum(["Pending", "Processing", "Delivered", "Cancelled"]).optional();


const OrderValidationSchema = z.object({
    cartId: z.string(),
    customerDetails: CustomerDetailsValidationSchema,
    paymentMethod: PaymentMethodsValidationSchema,
    paymentStatus: PaymentStatusValidationSchema,
    orderStatus: OrderStatusValidationSchema,
});


export const OrderValidation = {
    OrderValidationSchema,
};
