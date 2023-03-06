import express from "express";
import SkillRouter from "./skill.router";
import ContactRouter from "./contact.router";

const router = express.Router();

router.use("/skills", SkillRouter);
router.use("/contacts", ContactRouter);

export default router;
