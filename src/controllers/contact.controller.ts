import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import {
    getContact,
    createContact,
    IContactPayload,
    getContacts,
} from "../repositories/contact";
import {Contact} from "../models/contact";

@Route("contacts")
@Tags("Contact")
export default class ContactController {
    @Get("/")
    public async getContacts(): Promise<Array<Contact>> {
        return getContacts();
    }

    @Post("/")
    public async createContact(@Body() body: IContactPayload): Promise<Contact> {
        return createContact(body);
    }

    @Get("/:id")
    public async getContact(@Path() id: string): Promise<Contact | null> {
        return getContact(Number(id));
    }
}
