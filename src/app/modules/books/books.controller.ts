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

const getAllBooks = catchAsync(async (req, res) => {
  const result = await BooksService.getAllBooks();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getBookByBookId = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await BooksService.getBookByBookId(bookId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

const updateBookByBookId = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const payload = req.body;
  const result = await BooksService.updateBookByBookId(bookId, payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBookByBookId = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  await BooksService.deleteBookByBookId(bookId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book successfully deleted",
  });
});

export const BooksController = {
  createBook,
  getAllBooks,
  getBookByBookId,
  updateBookByBookId,
  deleteBookByBookId,
};
