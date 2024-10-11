import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { findWithPaginationAndFilters } from 'src/common/utils/query';
import { ResponsePagination } from 'src/common/interfaces/params';
import { CreateAeropuertoDto } from './dto/create-aeropuerto.dto';
import { UpdateAeropuertoDto } from './dto/update-aeropuerto.dto';
import { Aeropuerto } from './entities/aeropuerto.entity';
import { AeropuertoParamsDto } from './dto/aeropuerto-params.dto';
import { aeropuertoParams } from './params/regionalTableParams';

@Injectable()
export class AeropuertoService {
  constructor(
    @InjectRepository(Aeropuerto)
    private readonly aeropuertoRepository: Repository<Aeropuerto>,
  ) {}
  create(createAeropuertoDto: CreateAeropuertoDto) {
    return 'This action adds a new aeropuerto';
  }

  async findAll(params: AeropuertoParamsDto): Promise<ResponsePagination> {
    return findWithPaginationAndFilters(
      this.aeropuertoRepository,
      params,
      'turno',
      aeropuertoParams,
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} aeropuerto`;
  }

  update(id: number, updateAeropuertoDto: UpdateAeropuertoDto) {
    return `This action updates a #${id} aeropuerto`;
  }

  remove(id: number) {
    return `This action removes a #${id} aeropuerto`;
  }
}
