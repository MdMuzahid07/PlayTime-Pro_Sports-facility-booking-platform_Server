import requestValidator from "../../middlewares/requestValidator";
import express from "express";
import { CartController } from "./cart.controller";
import { CartValidation } from "./cart.validation";



const router = express.Router();

router.post(
    "/add-cart",
    requestValidator(CartValidation.CartValidationSchema),
    CartController.createCart
);

router.get(
    "/",
    CartController.getAllCart
);

router.get(
    "/:cartId",
    CartController.getASingleCart
);

router.patch(
    "/:cartId",
    CartController.updateACart

);

router.delete(
    "/:cartId",
    CartController.deleteACart

);


export const CartRoutes = router;