import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parties } from './parties.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PartiesService {
  constructor(
    @InjectRepository(Parties) private repository: Repository<Parties>,
  ) {}
  findAll() {
    return this.repository.find({ relations: ['party_category', 'creator'] });
  }
  findById(id: number) {
    return this.repository.findOne(id, {
      relations: ['party_category', 'creator'],
    });
  }
  create(party: Parties) {
    this.repository.save(party);
  }
  delete(party: Parties) {
    this.repository.delete(party);
  }
  update(party: Parties) {
    this.repository.update(party.id, party);
  }
}
