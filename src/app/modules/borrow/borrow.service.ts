import { BorrowRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBorrow = async (payload: BorrowRecord) => {
  const { bookId, memberId } = payload;
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });
  const result = await prisma.borrowRecord.create({
    data: payload,
  });

  return result;
};

const getAllOverdueBorrowList = async () => {
  const currentDate = new Date();
  const overdueBorrowBooks = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lt: new Date(currentDate.setDate(currentDate.getDate() - 14)),
      },
    },
    include: {
      book: {
        select: {
          title: true,
        },
      },
      member: {
        select: {
          name: true,
        },
      },
    },
  });

  const result = overdueBorrowBooks.map((record) => {
    const overdueDays = Math.ceil(
      (currentDate.getTime() - new Date(record.borrowDate).getTime()) /
        (1000 * 3600 * 24),
    );

    return {
      borrowId: record.borrowId,
      bookTitle: record.book.title,
      borrowerName: record.member.name,
      overdueDays: overdueDays,
    };
  });

  return result;
};

export const BorrowService = {
  createBorrow,
  getAllOverdueBorrowList,
};
