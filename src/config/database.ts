import { ConnectionOptions } from "typeorm";
import {User, Post, Comment} from '../models'
import {Skill} from "../models/skill";
import {Contact} from "../models/contact";
import {Experiences} from "../models/experiences";
import {Formations} from "../models/formations";

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "postgres",
    database: process.env.POSTGRES_DB || "postgres",
    entities: [Skill, Contact, Experiences, Formations],
    synchronize: true,
};

export default config;

