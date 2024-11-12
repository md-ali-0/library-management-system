import { BorrowRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBorrow = async (payload: BorrowRecord) => {
  const result = await prisma.borrowRecord.create({
    data: payload,
  });

  return result;
};

export const BorrowService = {
  createBorrow,
};
