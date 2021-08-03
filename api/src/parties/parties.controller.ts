import { Controller, Get } from '@nestjs/common';
import { PartiesService } from './parties.service';

@Controller('parties')
export class PartiesController {
  constructor(private service: PartiesService) {}
  @Get()
  getAll() {
    return this.service.findAll();
  }
}
