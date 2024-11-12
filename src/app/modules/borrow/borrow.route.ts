import { Router } from "express";
import { BorrowController } from "./borrow.controller";

const router = Router();

router.get("/overdue", BorrowController.getAllOverdueBorrowList);
router.post("/", BorrowController.createBorrow);

export const BorrowRoutes = router;
