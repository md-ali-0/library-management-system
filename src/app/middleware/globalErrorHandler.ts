import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
import AppError from "../errors/AppError";
import handleZodError from "../errors/handleZodError";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  //setting default values
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let message = "Something went wrong!";

  if (error instanceof ZodError) {
    const zodError = handleZodError(error);
    statusCode = zodError?.statusCode;
    message = zodError?.errorSources?.[0]?.message;
  } else if (error.name === "PrismaClientKnownRequestError") {
    statusCode = StatusCodes.CONFLICT;
    message = "Duplicate Entity";
  } else if (error.name === "NotFoundError") {
    statusCode = StatusCodes.CONFLICT;
    message = "Not Found Error";
  } else if (error instanceof AppError) {
    statusCode = error?.statusCode;
    message = error.message;
  }

  res.status(statusCode).json({
    success: false,
    massage: message,
    error,
  });
  next();
};

export default globalErrorHandler;
