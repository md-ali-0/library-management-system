import { Router } from "express";
import { BooksRoutes } from "../modules/books/books.route";

const router = Router();

const Routes = [
  {
    path: "/books",
    route: BooksRoutes,
  },
];

Routes.forEach((route) => router.use(route.path, route.route));

export default router;
