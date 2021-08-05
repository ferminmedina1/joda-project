import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AssistsService } from './assists.service';
import { Assists } from './assists.entity';

@Controller('assists')
export class AssistsController {
  constructor(private service: AssistsService) {}
  @Get(':id')
  findAll(@Param('id') id: number) {
    return this.service.findAll(id);
  }
  findById(id: number) {
    return this.service.findById(id);
  }
  @Post()
  async create(@Body('assists') assists: Assists) {
    await this.service.create(assists);
    return assists;
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    const assists: Assists = await this.findById(id);
    await this.service.delete(assists);
  }
}
