import { Request, RequestHandler, Response } from "express";
import tryCatchAsync from "../../utils/tryCatchAsync";
import { CartService } from "./cart.service";
import httpStatus from "http-status";
import sendResponse from "../../utils/send.response";



//* tryCatchAsync , is an HOC, its take this function an return if resolved the promise, or send error to the global error handler

const createCart: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await CartService.createCartIntoDB(req.body);

    // sendResponse is a util function
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "new cart added successfully",
        data: result
    });
});


const getAllCart: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await CartService.getAllCartFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "carts retrieved successfully",
        data: result
    });
});


const getASingleCart: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { cartId } = req.params;
    const result = await CartService.getACartFromDB(cartId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "cart retrieved successfully by id",
        data: result
    });
});


const updateACart: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { cartId } = req.params;
    const payload = req.body;

    const result = await CartService.updateACartFromDB(cartId, payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "cart update successfully",
        data: result
    });
});

const deleteACart: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { cartId } = req.params;
    const result = await CartService.deleteACartFromDB(cartId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "cart deleted successfully",
        data: result
    });
});


export const CartController = {
    createCart,
    getAllCart,
    getASingleCart,
    updateACart,
    deleteACart
};