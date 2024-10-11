import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dependencia } from './entities/dependencia.entity';
import { CreateDependenciaDto } from './dto/create-dependencia.dto';
import { UpdateDependenciaDto } from './dto/update-dependencia.dto';
import { DependenciaParamsDto } from './dto/dependencia-params.dto';
import { findWithPaginationAndFilters } from 'src/common/utils/query';
import { ResponsePagination } from 'src/common/interfaces/params';
import { dependenciaParams } from './params/dependenciaTableParams';

@Injectable()
export class DependenciaService {
  constructor(
    @InjectRepository(Dependencia)
    private readonly dependenciaRepository: Repository<Dependencia>,
  ) {}
  create(createDependenciaDto: CreateDependenciaDto) {
    return 'This action adds a new dependencia';
  }

  async findAll(params: DependenciaParamsDto): Promise<ResponsePagination> {
    return findWithPaginationAndFilters(
      this.dependenciaRepository,
      params,
      'dependencia',
      dependenciaParams,
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} dependencia`;
  }

  update(id: number, updateDependenciaDto: UpdateDependenciaDto) {
    return `This action updates a #${id} dependencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} dependencia`;
  }
}
