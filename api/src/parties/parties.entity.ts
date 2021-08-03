import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany, OneToMany,
} from 'typeorm';
import { Party_categories } from './party_categories.entity';
import { Users } from '../users/users.entity';
import { Assists } from '../assists/assists.entity';
import {SavedParties} from "../saved-parties/saved_parties.entity";

@Entity()
export class Parties {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'date', default: '2021-01-01' })
  day: string;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column()
  persons_limit: number;

  @Column({ nullable: true })
  address: string;

  @ManyToOne(() => Party_categories, (category) => category.parties)
  party_category: Party_categories;

  @ManyToOne(() => Users, (user) => user.parties)
  creator: Users;

  @ManyToMany(() => Assists, (assists) => assists.party)
  assists: Assists[];

  @OneToMany(() => SavedParties, (party) => party.party)
  saved: SavedParties[];
}
