import { Router } from "express";
import { BooksController } from "./books.controller";

const router = Router();

router.post("/", BooksController.createBook);

export const BooksRoutes = router;
