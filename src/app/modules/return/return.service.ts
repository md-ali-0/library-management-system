import prisma from "../../../shared/prisma";

const createReturn = async (borrowId: string) => {
  const result = await prisma.borrowRecord.update({
    where: {
      borrowId,
    },
    data: {
      returnDate: new Date().toISOString(),
    },
  });

  return result;
};

export const ReturnService = {
  createReturn,
};
