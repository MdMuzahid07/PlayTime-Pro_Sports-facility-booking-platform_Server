import mongoose from "mongoose";
import { OrderSchema } from "./order.schema";
import { TOrder } from "./order.interface";


const OrderModel = mongoose.model<TOrder>("Order", OrderSchema);
export default OrderModel;