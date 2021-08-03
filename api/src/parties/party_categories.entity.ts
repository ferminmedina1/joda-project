import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Parties } from './parties.entity';

@Entity()
export class Party_categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  logo: string;

  @OneToMany(() => Parties, (party) => party.party_category)
  parties: Parties[];
}
