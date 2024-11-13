import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { BorrowController } from "./borrow.controller";
import { borrowValidation } from "./borrow.validation";

const router = Router();

router.get("/overdue", BorrowController.getAllOverdueBorrowList);
router.post(
  "/",
  validateRequest(borrowValidation.borrowCreateSchema),
  BorrowController.createBorrow,
);

export const BorrowRoutes = router;
