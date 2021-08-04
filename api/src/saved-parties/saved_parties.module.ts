import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SavedParties } from './saved_parties.entity';
import { SavedPartiesService } from './saved_parties.service';
import { SavedPartiesController } from './saved-parties.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SavedParties])],
  controllers: [SavedPartiesController],
  providers: [SavedPartiesService],
})
export class SavedPartiesModule {}
