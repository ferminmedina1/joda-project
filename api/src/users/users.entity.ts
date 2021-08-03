import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique,
  ManyToMany,
} from 'typeorm';
import { Parties } from '../parties/parties.entity';
import { Assists } from '../assists/assists.entity';
import {SavedParties} from "../saved-parties/saved_parties.entity";

@Entity()
@Unique(['email'])
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ type: 'date', default: '2021-01-01' })
  birthday: string;

  @Column({ nullable: true })
  profile_photo: string;

  @OneToMany(() => Parties, (party) => party.creator)
  parties: Parties[];

  @OneToMany(() => SavedParties, (party) => party.user)
  saved_parties: SavedParties[];

  @ManyToMany(() => Assists, (assists) => assists.user)
  assists: Assists[];
}
