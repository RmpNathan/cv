import { getRepository } from "typeorm";
import { Skill } from "../models/skill";

export interface ISkillPayload {
    title: string;
    categorie: string;
    rate: number;
}

export const getSkills = async (): Promise<Array<Skill>> => {
    const skillRepository = getRepository(Skill);
    return skillRepository.find();
};

export const createSkill = async (payload: ISkillPayload): Promise<Skill> => {
    const skillRepository = getRepository(Skill);
    const skill = new Skill();
    return skillRepository.save({
        ...skill,
        ...payload,
    });
};

export const getSkill = async (id: number): Promise<Skill | null> => {
    const skillRepository = getRepository(Skill);
    const skill = await skillRepository.findOne({
        where: {
            id: id,
        }
    });
    if (!skill) return null;
    return skill;
};
