import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column({default: 'Nathan Rampillon'})
    name!: string;

    @Column({default: ''})
    description!: string;

    @Column({default: 'DEVELOPPEUR WEB'})
    status!: string;

    @Column()
    icon!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
