import httpStatus from "http-status";
import CustomAppError from "../../errors/CustomAppError";
import UserModel from "../user/user.schema.model";
import { TLogin } from "./auth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";

const LoginUser = async (payload: TLogin) => {
    const { email, password } = payload;

    const isUserExistsOnDB = await UserModel.findOne({
        email
    });

    if (!isUserExistsOnDB) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "User not exists");
    };

    const isPasswordMatched = await bcrypt.compare(password, isUserExistsOnDB?.password);

    if (!isPasswordMatched) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "User password not matched, please try again with right password");
    };

    if (isUserExistsOnDB && isUserExistsOnDB?.isDeleted === true) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "User not exists");
    };

    // jwt token 

    const jwtPayload = {
        email: isUserExistsOnDB?.email,
        password: isUserExistsOnDB?.password
    };

    const accessToken = jwt.sign(jwtPayload, config.jwt_secret_key as string, { expiresIn: '1d' });


    return {
        token: accessToken,
        user: isUserExistsOnDB
    };
};


export const LoginServices = {
    LoginUser
};