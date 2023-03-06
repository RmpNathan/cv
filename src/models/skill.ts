import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column( {default: 'Langages'})
    categorie!: string;

    @Column()
    rate!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
