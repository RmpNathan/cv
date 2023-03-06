import express from "express";
import SkillController from "../controllers/skill/skill.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
    const controller = new SkillController();
    const response = await controller.getSkills();
    return res.send(response);
});

router.post("/", async (req, res) => {
    const controller = new SkillController();
    const response = await controller.createSkill(req.body);
    return res.send(response);
});

router.get("/:id", async (req, res) => {
    const controller = new SkillController();
    const response = await controller.getSkill(req.params.id);
    if (!response) res.status(404).send({ message: "No skill found" });
    return res.send(response);
});

export default router;
