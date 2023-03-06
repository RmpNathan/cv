import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import {
    getSkill,
    createSkill,
    ISkillPayload,
    getSkills,
} from "../../repositories/skill";
import {Skill} from "../../models/skill";

@Route("skills")
@Tags("Skill")
export default class SkillController {
    @Get("/")
    public async getSkills(): Promise<Array<Skill>> {
        const skills = getSkills();
        console.log("skills : ", skills)
        return skills;
    }

    @Post("/")
    public async createSkill(@Body() body: ISkillPayload): Promise<Skill> {
        return createSkill(body);
    }

    @Get("/:id")
    public async getSkill(@Path() id: string): Promise<Skill | null> {
        return getSkill(Number(id));
    }
}
