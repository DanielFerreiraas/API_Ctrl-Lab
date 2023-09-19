import { schedule } from "@/modules/schedule/database/repositories/entities/schedule.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // @Column("varchar", { length: 255, unique: true })
  // username: string;

  @Column("varchar", { length: 255 })
  numberRegister: string;

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

  @OneToMany(() => schedule, (schedule) => schedule.user)
  schedules: schedule

}