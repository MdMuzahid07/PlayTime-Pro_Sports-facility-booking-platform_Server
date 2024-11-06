import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import requestValidator from "../../middlewares/requestValidator";
import { UserValidation } from "./user.validation";
import { multerUpload } from "../../config/multer.config";

const router = express.Router();

router.post(
  "/auth/signup",
  requestValidator(UserValidation.UserValidationSchema),
  UserController.createUser,
);

router.patch(
  "/auth/profile-update",
  multerUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    if (req?.body?.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  requestValidator(UserValidation.UserUpdateValidationSchema),
  UserController.updateUser,
);


export const UserRoutes = router;
