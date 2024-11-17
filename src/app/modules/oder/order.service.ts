/* eslint-disable @typescript-eslint/no-explicit-any */
import { TOrder } from "./order.interface";
import OrderModel from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {

    // get all Order available in DB
    // const OrderItems = await OrderModel.find();

    // checking is exists
    // const isExists = OrderItems?.find((Order) => Order.name === payload?.name);

    // if (isExists) {
    //     throw new Error("this Order already added");
    // }

    const result = await OrderModel.create(payload);
    return result;
};

const getAllOrderFromDB = async () => {
    const result = await OrderModel.find().populate({
        path: "cartId",
        populate: {
            path: "userId",
        },
    }).populate("customerDetails.userId");


    return result;
};

const getAOrderFromDB = async (id: string) => {
    const result = await OrderModel.findById({ _id: id });
    return result;
};

const updateAOrderFromDB = async (id: string, payload: Partial<TOrder>) => {
    const result = await OrderModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        runValidation: true
    });
    return result;
};

const deleteAOrderFromDB = async (id: string) => {
    // checking is exists
    const isExists = await OrderModel?.findById(id);

    if (!isExists) {
        throw new Error("this Order not exists in DB");
    }

    const result = await OrderModel.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                deleted: true
            }
        },
        {
            new: true,
            runValidators: true
        }
    );

    return result;
};


const manageSportsEquipmentsPaymentStatusFromDB = async (id: string) => {

    // checking is exists
    const isExists = await OrderModel?.findById(id);

    if (!isExists) {
        throw new Error("this Order not exists in DB");
    }

    const result = await OrderModel.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                paymentMethod: "COD"
            }
        },
        {
            new: true,
            runValidators: true
        }
    );

    return result;
};




const adminManageSportsEquipmentsOrderStatusFromDB = async (id: string, payload: string) => {

    // checking is exists
    const isExists = await OrderModel?.findById(id);

    if (!isExists) {
        throw new Error("this Order not exists in DB");
    }

    if (typeof payload !== "string") {
        throw new Error("Invalid payload: orderStatus must be a string.");
    }


    const result = await OrderModel.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                orderStatus: payload
            }
        },
        {
            new: true,
            runValidators: true
        }
    );

    return result;
};




export const OrderService = {
    createOrderIntoDB,
    getAllOrderFromDB,
    getAOrderFromDB,
    updateAOrderFromDB,
    deleteAOrderFromDB,
    manageSportsEquipmentsPaymentStatusFromDB,
    adminManageSportsEquipmentsOrderStatusFromDB
};