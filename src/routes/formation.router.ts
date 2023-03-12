import express from "express";
import SkillController from "../controllers/skill/skill.controller";
import ExperienceController from "../controllers/experience/experience.controller";
import FormationController from "../controllers/formations/formation.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
    const controller = new FormationController();
    const response = await controller.getFormations();
    return res.send(response);
});

router.post("/", async (req, res) => {
    const controller = new FormationController();
    const response = await controller.createFormation(req.body);
    return res.send(response);
});

router.get("/:id", async (req, res) => {
    const controller = new FormationController();
    const response = await controller.getFormation(req.params.id);
    if (!response) res.status(404).send({ message: "No formation found" });
    return res.send(response);
});

export default router;
