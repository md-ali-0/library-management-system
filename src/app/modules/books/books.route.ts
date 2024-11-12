import { Router } from "express";
import { BooksController } from "./books.controller";

const router = Router();

router.get("/", BooksController.getAllBooks);
router.get("/:bookId", BooksController.getBookByBookId);
router.post("/", BooksController.createBook);
router.put("/:bookId", BooksController.updateBookByBookId);
router.delete("/:bookId", BooksController.deleteBookByBookId);

export const BooksRoutes = router;
