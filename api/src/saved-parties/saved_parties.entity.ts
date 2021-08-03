import { Entity, PrimaryGeneratedColumn, Unique, ManyToOne } from 'typeorm';
import { Parties } from '../parties/parties.entity';
import { Users } from '../users/users.entity';

@Entity()
@Unique(['user', 'party'])
export class SavedParties {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.saved_parties)
  user: Users[];

  @ManyToOne(() => Parties, (parties) => parties.saved)
  party: Parties[];
}
