import express from "express";
import SkillController from "../controllers/skill/skill.controller";
import ExperienceController from "../controllers/experience/experience.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
    const controller = new ExperienceController();
    const response = await controller.getExperiences();
    return res.send(response);
});

router.post("/", async (req, res) => {
    const controller = new ExperienceController();
    const response = await controller.createExperience(req.body);
    return res.send(response);
});

router.get("/:id", async (req, res) => {
    const controller = new ExperienceController();
    const response = await controller.getExperience(req.params.id);
    if (!response) res.status(404).send({ message: "No experience found" });
    return res.send(response);
});

export default router;
