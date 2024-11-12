import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { ReturnService } from "./return.service";

const createReturn = catchAsync(async (req, res) => {
  const payload = req.body;

  await ReturnService.createReturn(payload?.borrowId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book returned successfully",
  });
});

export const ReturnController = {
  createReturn,
};
