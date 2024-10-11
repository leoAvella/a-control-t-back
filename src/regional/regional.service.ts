import { Injectable } from '@nestjs/common';
import { CreateRegionalDto } from './dto/create-regional.dto';
import { UpdateRegionalDto } from './dto/update-regional.dto';
import { findWithPaginationAndFilters } from 'src/common/utils/query';
import { RegionalParamsDto } from './dto/regional-params.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Regional } from './entities/regional.entity';
import { Repository } from 'typeorm';
import { regionalParams } from './params/regionalTableParams';
import { ResponsePagination } from 'src/common/interfaces/params';

@Injectable()
export class RegionalService {
  constructor(
    @InjectRepository(Regional)
    private readonly regionalRepository: Repository<Regional>,
  ) {}
  create(createRegionalDto: CreateRegionalDto) {
    return 'This action adds a new regional';
  }

  async findAll(params: RegionalParamsDto): Promise<ResponsePagination> {
    return findWithPaginationAndFilters(
      this.regionalRepository,
      params,
      'turno',
      regionalParams,
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} regional`;
  }

  update(id: number, updateRegionalDto: UpdateRegionalDto) {
    return `This action updates a #${id} regional`;
  }

  remove(id: number) {
    return `This action removes a #${id} regional`;
  }
}
