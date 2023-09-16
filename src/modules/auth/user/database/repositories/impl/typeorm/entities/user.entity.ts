import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // @Column("varchar", { length: 255, unique: true })
  // username: string;

  @Column()
  numberRegister: number;

  @Column("varchar", { length: 255 })
  password: string;

  // @Column()
  // type: string;

  // @Column()
  // name: string;

  // @Column()
  // photoLink: string;

  // @Column()
  // description: string;

}