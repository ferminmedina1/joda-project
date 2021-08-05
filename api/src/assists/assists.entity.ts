import { Entity, PrimaryGeneratedColumn, Unique, ManyToOne } from 'typeorm';
import { Parties } from '../parties/parties.entity';
import { Users } from '../users/users.entity';

@Entity()
@Unique(['user', 'party'])
export class Assists {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.assists)
  user: Users[];

  @ManyToOne(() => Parties, (parties) => parties.assists)
  party: Parties[];
}
