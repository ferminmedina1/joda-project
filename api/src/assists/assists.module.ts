import { Module } from '@nestjs/common';
import { AssistsService } from './assists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssistsController } from './assists.controller';
import { Assists } from './assists.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assists])],
  controllers: [AssistsController],
  providers: [AssistsService],
})
export class AssistsModule {}
