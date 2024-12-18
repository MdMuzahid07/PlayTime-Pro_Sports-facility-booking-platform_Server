import { Schema, Types } from 'mongoose';

// Define the Mongoose schema
const ReviewSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
    facilityOrProductId: {
        type: Types.ObjectId,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    reviewText: {
        type: String,
        required: true,
    },
    reviewImages: {
        type: [String],
        default: [],
    },
}, {
    timestamps: true
});

export default ReviewSchema;