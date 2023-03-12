import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import {
    getExperience,
    createExperience,
    IExperiencesPayload,
    getExperiences,
} from "../../repositories/experience";
import {Experiences} from "../../models/experiences";

@Route("experiences")
@Tags("Experience")
export default class ExperienceController {
    @Get("/")
    public async getExperiences(): Promise<Array<Experiences>> {
        const experiences = getExperiences();
        console.log("experiences : ", experiences)
        return experiences;
    }

    @Post("/")
    public async createExperience(@Body() body: IExperiencesPayload): Promise<Experiences> {
        return createExperience(body);
    }

    @Get("/:id")
    public async getExperience(@Path() id: string): Promise<Experiences | null> {
        return getExperience(Number(id));
    }
}
