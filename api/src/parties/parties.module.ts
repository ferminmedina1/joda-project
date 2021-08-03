import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parties } from './parties.entity';
import { PartiesController } from './parties.controller';
import { PartiesService } from './parties.service';
import { Party_categories } from './party_categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parties, Party_categories])],
  controllers: [PartiesController],
  providers: [PartiesService],
})
export class PartiesModule {}
