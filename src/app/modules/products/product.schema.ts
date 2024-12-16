import mongoose from "mongoose";
import { TProduct } from "./product.interface";


export const ProductSchema = new mongoose.Schema<TProduct>(
    {
        title: {
            type: String,
            unique: true,
        },
        description: {
            type: String,
        },
        stock: {
            type: Number,
        },
        price: {
            type: Number,
        },
        quantity: {
            type: Number,
        },
        imageUrl: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: true
    }
);

