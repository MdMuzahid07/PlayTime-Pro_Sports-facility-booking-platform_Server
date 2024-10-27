//* tryCatchAsync , is an HOC, its take this function an return if resolved the promise, or send error to the global error handler

import { Request, RequestHandler, Response } from "express";
import tryCatchAsync from "../../utils/tryCatchAsync";
import { OrderService } from "./order.service";
import httpStatus from "http-status";
import sendResponse from "../../utils/send.response";


const createOrder: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await OrderService.createOrderIntoDB(req.body);

    // sendResponse is a util function
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "new Order added successfully",
        data: result
    });
});


const getAllOrder: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await OrderService.getAllOrderFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Orders retrieved successfully",
        data: result
    });
});


const getASingleOrder: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { orderId } = req.params;
    const result = await OrderService.getAOrderFromDB(orderId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Order retrieved successfully by id",
        data: result
    });
});


const updateAOrder: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { orderId } = req.params;
    const payload = req.body;

    const result = await OrderService.updateAOrderFromDB(orderId, payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Order update successfully",
        data: result
    });
});

const deleteAOrder: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { orderId } = req.params;
    const result = await OrderService.deleteAOrderFromDB(orderId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Order deleted successfully",
        data: result
    });
});


export const OrderController = {
    createOrder,
    getAllOrder,
    getASingleOrder,
    updateAOrder,
    deleteAOrder
};