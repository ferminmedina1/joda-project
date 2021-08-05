import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assists } from './assists.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssistsService {
  constructor(
    @InjectRepository(Assists) private repository: Repository<Assists>,
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
  create(assists: Assists) {
    this.repository.save(assists);
  }
  delete(assists: Assists) {
    this.repository.update(assists.id, assists);
  }
}
