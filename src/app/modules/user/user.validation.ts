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
  avatar: z.string().optional(),
  email: z.string(),
  password: z
    .string()
    .max(20, { message: "password can't be more than 20 character" }),
  phone: z.string(),
  role: z.enum(["admin", "user"]),
  address: z.string(),
  shippingAddress: z.array(ShippingAddressValidationSchema).optional(),
  isDeleted: z.boolean().optional(),
});


const UserUpdateValidationSchema = z.object({
  name: z.string().optional(),
  avatar: z.string().optional(),
  email: z.string().optional(),
  password: z
    .string()
    .max(20, { message: "password can't be more than 20 character" }).optional(),
  phone: z.string().optional(),
  role: z.enum(["admin", "user"]).optional(),
  address: z.string().optional(),
  shippingAddress: z.array(ShippingAddressValidationSchema).optional(),
  isDeleted: z.boolean().optional(),
});

export const UserValidation = {
  UserValidationSchema,
  UserUpdateValidationSchema
};
