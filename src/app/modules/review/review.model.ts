import mongoose from "mongoose";
import ReviewSchema from "./review.schema";
import { TReview } from "./review.interface";



const ReviewModel = mongoose.model<TReview>("review", ReviewSchema);

export default ReviewModel;