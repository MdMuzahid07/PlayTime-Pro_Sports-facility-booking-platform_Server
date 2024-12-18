import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../config/multer.config";
import requestValidator from "../../middlewares/requestValidator";
import { ReviewValidation } from "./review.validation";
import { ReviewController } from "./review.controller";
const router = express.Router();

router.post(
    "/add-review",
    multerUpload.array("files"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    requestValidator(ReviewValidation.reviewValidationSchema),
    ReviewController.addReview
);

router.get(
    "/",
    ReviewController.getAllReviews
);

router.get(
    "/:reviewId",
    ReviewController.getReviewByUserId
);


router.delete(
    "/:productId",
    ReviewController.deleteAReview
);


export const ReviewRoutes = router;