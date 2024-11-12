import { Router } from "express";
import { MembersController } from "./members.controller";

const router = Router();

router.get("/", MembersController.getAllMembers);
router.get("/:memberId", MembersController.getMemberByMemberId);
router.post("/", MembersController.createMember);
router.put("/:memberId", MembersController.updateMemberByBookId);

export const MembersRoutes = router;
