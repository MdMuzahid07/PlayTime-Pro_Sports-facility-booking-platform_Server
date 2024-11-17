import mongoose, { Types } from "mongoose";
import { TOrderStatus, TPaymentMethods, TPaymentStatus } from "./order.constants";

export interface TAddress {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
};

export interface TCustomerDetails {
    userId: mongoose.Types.ObjectId;
    // name: string;
    // email: string;
    // phoneNumber: string;
    address: TAddress
};


export interface TOrder {
    cartId: Types.ObjectId;
    customerDetails: TCustomerDetails;
    paymentMethod: TPaymentMethods;
    paymentStatus: TPaymentStatus;
    orderStatus: TOrderStatus;
    deleted: boolean;
};
