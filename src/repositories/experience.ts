import { getRepository } from "typeorm";
import {Experiences} from "../models/experiences";

export interface IExperiencesPayload {
    title: string;
    categorie: string;
    rate: number;
}

export const getExperiences = async (): Promise<Array<Experiences>> => {
    const experienceRepository = getRepository(Experiences);
    return experienceRepository.find();
};

export const createExperience = async (payload: IExperiencesPayload): Promise<Experiences> => {
    const experienceRepository = getRepository(Experiences);
    const experiences = new Experiences();
    return experienceRepository.save({
        ...experiences,
        ...payload,
    });
};

export const getExperience = async (id: number): Promise<Experiences | null> => {
    const experienceRepository = getRepository(Experiences);
    const experience = await experienceRepository.findOne({
        where: {
            id: id,
        }
    });
    if (!experience) return null;
    return experience;
};
