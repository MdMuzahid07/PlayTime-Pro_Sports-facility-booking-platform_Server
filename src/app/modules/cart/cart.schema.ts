import mongoose from "mongoose";
import { TCart, TCartItem } from "./cart.interface";

const CartItemSchema = new mongoose.Schema<TCartItem>({
    productId: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
});


export const CartSchema = new mongoose.Schema<TCart>({
    userId: {
        type: String,
        required: true,
        default: " "
    },
    items: {
        type: [CartItemSchema],
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    shippingCost: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
});