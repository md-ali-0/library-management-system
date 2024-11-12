import { Router } from "express";
import { BooksRoutes } from "../modules/books/books.route";
import { BorrowRoutes } from "../modules/borrow/borrow.route";
import { MembersRoutes } from "../modules/members/members.route";

const router = Router();

const Routes = [
  {
    path: "/books",
    route: BooksRoutes,
  },
  {
    path: "/members",
    route: MembersRoutes,
  },
  {
    path: "/borrow",
    route: BorrowRoutes,
  },
];

Routes.forEach((route) => router.use(route.path, route.route));

export default router;
