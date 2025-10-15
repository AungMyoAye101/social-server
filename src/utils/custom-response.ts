
import { Response } from "express";
import { successResponseType } from "../types";


export const successResponse = (
    res: Response,
    statusCode: number,
    success: boolean,
    message: string,
    result: any) => {
    return res.status(statusCode).json({
        success,
        message,
        result
    })
}