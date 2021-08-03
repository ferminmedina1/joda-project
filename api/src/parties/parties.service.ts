import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parties } from './parties.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PartiesService {
  constructor(
    @InjectRepository(Parties) private repository: Repository<Parties>,
  ) {}
  async findAll() {
    return this.repository.find({ relations: ['party_category', 'creator'] });
  }
}
