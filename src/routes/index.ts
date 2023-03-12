import express from "express";
import SkillRouter from "./skill.router";
import ContactRouter from "./contact.router";
import ExperienceRouter from "./experience.router";
import FormationRouter from "./formation.router";

const router = express.Router();

router.use("/skills", SkillRouter);
router.use("/contacts", ContactRouter);
router.use("/experiences", ExperienceRouter);
router.use("/formations", FormationRouter);

export default router;
