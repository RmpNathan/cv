import { getRepository } from "typeorm";
import {Formations} from "../models/formations";

export interface IFormationPayload {
    title: string;
    categorie: string;
    rate: number;
}

export const getFormations = async (): Promise<Array<Formations>> => {
    const formationRepository = getRepository(Formations);
    return formationRepository.find();
};

export const createFormation = async (payload: IFormationPayload): Promise<Formations> => {
    const formationRepository = getRepository(Formations);
    const formations = new Formations();
    return formationRepository.save({
        ...formations,
        ...payload,
    });
};

export const getFormation = async (id: number): Promise<Formations | null> => {
    const formationRepository = getRepository(Formations);
    const formation = await formationRepository.findOne({
        where: {
            id: id,
        }
    });
    if (!formation) return null;
    return formation;
};
