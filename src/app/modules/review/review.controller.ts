/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, RequestHandler, Response } from "express";
import tryCatchAsync from "../../utils/tryCatchAsync";
import sendResponse from "../../utils/send.response";
import httpStatus from "http-status";
import { ReviewService } from "./review.service";



const addReview: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.createReviewIntoDB((req as any).files, req.body);

    // sendResponse is a util function
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "review created successfully",
        data: result
    });
});


const getAllReviews: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.getAllReviews();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "review retrieved successfully",
        data: result
    });
});


const getReviewByUserId: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { userId } = req.params;
    const result = await ReviewService.getReviewsByUserIDFromDB(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "review retrieved successfully by id",
        data: result
    });
});

const deleteAReview: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { productId } = req.params;
    const result = await ReviewService.deleteAReview(productId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "review deleted successfully",
        data: result
    });
});


export const ReviewController = {
    addReview,
    getAllReviews,
    getReviewByUserId,
    deleteAReview
};