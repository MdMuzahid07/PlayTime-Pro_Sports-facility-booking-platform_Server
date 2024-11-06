import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../utils/send.response";
import { UserService } from "./user.service";
import config from "../../config";
import tryCatchAsync from "../../utils/tryCatchAsync";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { accessToken, refreshToken, user } = await UserService.createUserIntoDB(req.body);

    // saving refresh token in browser cookie
    res.cookie("refreshToken", refreshToken, {
      secure: config.NODE_ENV === "production",
      httpOnly: true,
    });


    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User registered successfully",
      token: accessToken,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};






const updateUser = tryCatchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const payload = req.body;
  const file = req.file;

  const result = await UserService.updateUserInfo(file, userId, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "user info update successfully",
    data: result
  });
});




export const UserController = {
  createUser,
  updateUser
};
