import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegionalService } from './regional.service';
import { RegionalController } from './regional.controller';
import { Regional } from './entities/regional.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Regional])],
  controllers: [RegionalController],
  providers: [RegionalService],
})
export class RegionalModule {}
