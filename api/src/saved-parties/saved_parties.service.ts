import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SavedParties } from './saved_parties.entity';

@Injectable()
export class SavedPartiesService {
  constructor(
    @InjectRepository(SavedParties)
    private repository: Repository<SavedParties>,
  ) {}
  findAll(id_user: number) {
    return this.repository.find({
      where: { user: id_user },
      relations: ['party', 'party.creator'],
    });
  }
  findById(id: number) {
    return this.repository.findOne(id, {
      relations: ['party', 'party.creator'],
    });
  }
  create(party: SavedParties) {
    // Mark party as saved.
    this.repository.save(party);
  }
  delete(party: SavedParties) {
    // Mark party as unsaved.
    this.repository.delete(party);
  }
}
