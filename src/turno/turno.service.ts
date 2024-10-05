import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turno } from './entities/turno.entity';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
import { TurnoParamsDto } from './dto/turno-params.dto';
import { findWithPaginationAndFilters } from 'src/common/utils/query';
import { ResponsePagination } from 'src/common/interfaces/params';
import { turnoParams } from './params/turnoTableParams';

@Injectable()
export class TurnoService {
  constructor(
    @InjectRepository(Turno)
    private readonly turnoRepository: Repository<Turno>,
  ) {}
  create(createTurnoDto: CreateTurnoDto) {
    return 'This action adds a new turno';
  }

  async findAll(params: TurnoParamsDto): Promise<ResponsePagination> {
    return findWithPaginationAndFilters(
      this.turnoRepository,
      params,
      'turno',
      turnoParams,
    );
  }

  async findOne(id: number): Promise<Turno | null> {
    return await this.turnoRepository.findOneBy({ id });
  }

  update(id: number, updateTurnoDto: UpdateTurnoDto) {
    return `This action updates a #${id} turno`;
  }

  remove(id: number) {
    return `This action removes a #${id} turno`;
  }
}
