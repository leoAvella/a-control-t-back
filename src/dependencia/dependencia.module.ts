import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Dependencia } from './entities/dependencia.entity';
import { DependenciaService } from './dependencia.service';
import { DependenciaController } from './dependencia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dependencia])],
  controllers: [DependenciaController],
  providers: [DependenciaService],
})
export class DependenciaModule {}
