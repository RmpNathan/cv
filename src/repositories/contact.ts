import { getRepository } from "typeorm";
import { Contact } from "../models/contact";

export interface IContactPayload {
    title: string;
    icon: string;
}

export const getContacts = async (): Promise<Array<Contact>> => {
    const contactRepository = getRepository(Contact);
    return contactRepository.find();
};

export const createContact = async (payload: IContactPayload): Promise<Contact> => {
    const contactRepository = getRepository(Contact);
    const contact = new Contact();
    return contactRepository.save({
        ...contact,
        ...payload,
    });
};

export const getContact = async (id: number): Promise<Contact | null> => {
    const contactRepository = getRepository(Contact);
    const contact = await contactRepository.findOne({
        where: {
            id: id,
        }
    });
    if (!contact) return null;
    return contact;
};
