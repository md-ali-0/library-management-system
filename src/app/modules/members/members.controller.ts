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

const getAllMembers = catchAsync(async (req, res) => {
  const result = await MembersService.getAllMembers();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

const getMemberByMemberId = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await MembersService.getMemberByMemberId(memberId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});

export const MembersController = {
  createMember,
  getAllMembers,
  getMemberByMemberId,
};
