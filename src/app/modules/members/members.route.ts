import { Router } from "express";
import { MembersController } from "./members.controller";

const router = Router();

router.post("/", MembersController.createMember);

export const MembersRoutes = router;
