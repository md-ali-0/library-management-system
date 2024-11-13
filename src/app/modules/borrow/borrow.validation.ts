import { z } from "zod";

const borrowCreateSchema = z.object({
  body: z.object({
    bookId: z.string({
      required_error: "bookId is required",
    }),
    memberId: z.string({
      required_error: "memberId is required",
    }),
  }),
});

export const borrowValidation = {
  borrowCreateSchema,
};
