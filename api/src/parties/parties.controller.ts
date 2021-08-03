import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { PartiesService } from './parties.service';
import { Parties } from './parties.entity';

@Controller('parties')
export class PartiesController {
  constructor(private service: PartiesService) {}
  @Get()
  getAll() {
    return this.service.findAll();
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.findById(id);
  }
  @Post()
  async create(@Body('party') party: Parties): Promise<Parties> {
    await this.service.create(party);
    return party;
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    const party = await this.service.findById(id);
    this.service.delete(party);
  }
  @Put()
  async update(@Body('party') party: Parties): Promise<Parties> {
    await this.service.update(party);
    return party;
  }
}
