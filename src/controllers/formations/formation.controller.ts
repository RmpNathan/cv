import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import {
    getFormation,
    createFormation,
    IFormationPayload,
    getFormations,
} from "../../repositories/formation";
import {Formations} from "../../models/formations";

@Route("formations")
@Tags("Formation")
export default class FormationController {
    @Get("/")
    public async getFormations(): Promise<Array<Formations>> {
        const formations = getFormations();
        console.log("formations : ", formations)
        return formations;
    }

    @Post("/")
    public async createFormation(@Body() body: IFormationPayload): Promise<Formations> {
        return createFormation(body);
    }

    @Get("/:id")
    public async getFormation(@Path() id: string): Promise<Formations | null> {
        return getFormation(Number(id));
    }
}
