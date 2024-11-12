import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { BorrowService } from "./borrow.service";

const createBorrow = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await BorrowService.createBorrow(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

export const BorrowController = {
  createBorrow,
};
