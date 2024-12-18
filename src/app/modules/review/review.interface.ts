import { Types } from "mongoose";


export interface TReview {
    userId: Types.ObjectId;
    facilityOrProductId: Types.ObjectId;
    rating: string;
    reviewText: string;
    reviewImages: string[];
};






