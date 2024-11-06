import { z } from "zod";


const ShippingAddressValidationSchema = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
});


const UserValidationSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z
    .string()
    .max(20, { message: "password can't be more than 20 character" }),
  phone: z.string(),
  role: z.enum(["admin", "user"]),
  address: z.string(),
  shippingAddress: z.array(ShippingAddressValidationSchema),
  isDeleted: z.boolean().optional(),
});

export const UserValidation = {
  UserValidationSchema,
};
