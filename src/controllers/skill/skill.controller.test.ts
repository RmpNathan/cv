import SkillController from "./skill.controller";
import * as SkillRepository from "../../repositories/skill"

describe("SkillController", () => {
    describe("getSkills", () => {
        test("should return empty array", async () => {
            const spy = jest
                .spyOn(SkillRepository, "getSkills")
                .mockResolvedValueOnce([]);
            const controller = new SkillController();
            const users = await controller.getSkills();
            expect(users).toEqual([]);
            expect(spy).toHaveBeenCalledWith();
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        });
    });
});
