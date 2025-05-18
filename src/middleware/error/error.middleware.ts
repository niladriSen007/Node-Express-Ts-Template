import { NextFunction, Request, Response } from "express";
import { GlobalError } from "../../utils/errors/app.error";

export const globalErrorHandler = (err: GlobalError, _: Request, res: Response, __: NextFunction) => {
  res.status(err.statusCode).json({
    success: false,
    message: err.message
  });
}

export const genericErrorHandler = (err: Error, _: Request, res: Response, __: NextFunction) => {
  console.log(err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
}