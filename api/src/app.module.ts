import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PartiesModule } from './parties/parties.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PartiesModule],
  controllers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
