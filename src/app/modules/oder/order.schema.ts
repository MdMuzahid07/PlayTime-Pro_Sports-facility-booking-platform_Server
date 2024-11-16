import mongoose, { Schema } from "mongoose";
import { TAddress, TCustomerDetails, TOrder } from "./order.interface";


const CustomerAddressSchema: Schema = new mongoose.Schema<TAddress>({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
});


const CustomerDetailsSchema: Schema = new mongoose.Schema<TCustomerDetails>({
    userId: {
        type: String,
        required: true
    },
    // name: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    // phoneNumber: {
    //     type: String,
    //     required: true
    // },
    address: {
        type: CustomerAddressSchema,
        required: true
    }
});

// orderId is the cart id
export const OrderSchema: Schema = new mongoose.Schema<TOrder>({
    cartId: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: "Cart"
    },
    customerDetails: {
        type: CustomerDetailsSchema,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ["Aamarpay", "COD", "Pending"],
        default: "Pending"
    },
    paymentStatus: {
        type: String,
        enum: ["Paid", "Pending", "Failed"],
        default: "Pending"
    },
    orderStatus: {
        type: String,
        enum: ["Pending", "Processing", "Delivered", "Cancelled"],
        default: "Pending"
    },
});