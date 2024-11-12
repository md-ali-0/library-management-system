import { Router } from "express";
import { BooksRoutes } from "../modules/books/books.route";
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
];

Routes.forEach((route) => router.use(route.path, route.route));

export default router;
