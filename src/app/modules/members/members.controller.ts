import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { MembersService } from "./members.service";

const createMember = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await MembersService.createMember(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

export const MembersController = {
  createMember,
};
