import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { BooksService } from "./books.service";

const createBook = catchAsync(async (req, res) => {
  const result = await BooksService.createBook(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

export const BooksController = {
  createBook,
};
