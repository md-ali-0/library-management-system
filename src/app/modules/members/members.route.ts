import { Router } from "express";
import { MembersController } from "./members.controller";

const router = Router();

router.get("/", MembersController.getAllMembers);
router.post("/", MembersController.createMember);

export const MembersRoutes = router;
