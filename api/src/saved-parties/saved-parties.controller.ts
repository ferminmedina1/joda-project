import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SavedPartiesService } from './saved_parties.service';
import { SavedParties } from './saved_parties.entity';

@Controller('saved-parties')
export class SavedPartiesController {
  constructor(private service: SavedPartiesService) {}
  @Get(':id')
  findByUser(@Param('id') id_user: number) {
    return this.service.findAll(id_user);
  }
  @Post()
  create(@Body('party') party: SavedParties) {
    // {user:x, party:x}
    this.service.create(party);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    const party = await this.service.findById(id);
    this.service.delete(party);
  }
}
