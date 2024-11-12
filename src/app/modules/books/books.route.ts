import { Router } from "express";
import { BooksController } from "./books.controller";

const router = Router();

router.get("/", BooksController.getAllBooks);
router.get("/:bookId", BooksController.getBookByBookId);
router.post("/", BooksController.createBook);

export const BooksRoutes = router;
