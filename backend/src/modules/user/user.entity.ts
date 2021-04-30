import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
      type: 'varchar',
      length: 255,
      nullable: false,
    })
    user_name: string;
    @Column({
      type: 'varchar',
      length: 255,
      nullable: false,
      unique: true
    })
    mail: string;
    @Column({
      type: 'text',
      nullable: false,
      select: false
    })
    password_hash: string;
    @Column({
      type: 'varchar',
      length: 255,
      nullable: false,
    })
    role: string
}