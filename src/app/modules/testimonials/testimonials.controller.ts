/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../utils/send.response";
import tryCatchAsync from "../../utils/tryCatchAsync";
import { TestimonialService } from "./testimonials.service";


const addTestimonial: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {

    const result = await TestimonialService.createTestimonialIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "testimonial created successfully",
        data: result
    });
});


const getAllTestimonials: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await TestimonialService.getTestimonialsFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "testimonial retrieved successfully",
        data: result
    });
});


const getASingleTestimonial: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { TestimonialId } = req.params;
    const result = await TestimonialService.getATestimonialFromDB(TestimonialId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "testimonial retrieved successfully by id",
        data: result
    });
});


const updateATestimonial: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { TestimonialId } = req.params;
    const result = await TestimonialService.updateATestimonailFromDB(TestimonialId, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "testimonial update successfully",
        data: result
    });
});

const deleteATestimonial: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { TestimonialId } = req.params;
    const result = await TestimonialService.deleteATestimonialFromDB(TestimonialId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "testimonial deleted successfully",
        data: result
    });
});


export const TestimonialController = {
    getAllTestimonials,
    getASingleTestimonial,
    addTestimonial,
    updateATestimonial,
    deleteATestimonial
};