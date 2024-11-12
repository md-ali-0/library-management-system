import { Response } from "express";

export const sendResponse = <T>(
  res: Response,
  jsonData: {
    statusCode: number;
    success: boolean;
    message: string;
    data?: T | null | undefined;
  },
) => {
  return res.status(jsonData.statusCode).json({
    success: jsonData.success,
    message: jsonData.message,
    data: jsonData.data || null || undefined,
  });
};
