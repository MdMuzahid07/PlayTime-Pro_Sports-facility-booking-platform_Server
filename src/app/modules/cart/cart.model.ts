import mongoose from "mongoose";
import { CartSchema } from "./cart.schema";

const CartModel = mongoose.model("Cart", CartSchema);

export default CartModel;