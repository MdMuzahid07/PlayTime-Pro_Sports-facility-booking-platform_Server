import express from "express";
import { paymentController } from "./payment.controller";


const router = express.Router();

router.post("/order-confirmation", paymentController.confirmationController);
router.post("/order-cancel", paymentController.cancelController);

export const paymentRoutes = router;
