/* eslint-disable @typescript-eslint/no-explicit-any */

import { TReview } from "./review.interface";
import ReviewModel from "./review.model";


const createReviewIntoDB = async (files: any[], payload: TReview) => {

    const review: Partial<TReview> = { ...payload };

    const { userId, facilityOrProductId } = payload;
    const isExists = await ReviewModel.findOne({ userId, facilityOrProductId });

    if (isExists) {
        throw new Error("already reviewed!");
    }

    if (files && payload) {
        review.reviewImages = files?.map((file) => file.path);
    }

    const result = await ReviewModel.create(review);
    return result;
};

const getAllReviews = async () => {
    const result = await ReviewModel.find().populate("userId");
    return result;
};


const getReviewsByUserIDFromDB = async (id: string) => {
    const result = await ReviewModel.findById({ _id: id });
    return result;
};




const deleteAReview = async (reviewId: string, userId: string) => {
    const result = await ReviewModel.findOneAndDelete({ _id: reviewId, userId: userId });
    return result;
};



export const ReviewService = {
    createReviewIntoDB,
    getReviewsByUserIDFromDB,
    deleteAReview,
    getAllReviews
};