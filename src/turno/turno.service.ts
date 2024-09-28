import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turno } from './entities/turno.entity';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
import { TurnoParamsDto } from './dto/turno-params.dto';

@Injectable()
export class TurnoService {
  constructor(
    @InjectRepository(Turno)
    private readonly turnoRepository: Repository<Turno>,
  ) {}
  create(createTurnoDto: CreateTurnoDto) {
    return 'This action adds a new turno';
  }

  async findAll(
    params: TurnoParamsDto,
  ): Promise<{ data: Turno[]; total: number }> {
    try {
      const { page, size, sort, sortby, ...filters } = params;
      const queryBuilder = this.turnoRepository.createQueryBuilder('turno');
      Object.keys(filters).forEach((key) => {
        const value = filters[key];
        if (value !== undefined && value !== null) {
          queryBuilder.andWhere(`turno.${key} = :${key}`, { [key]: value });
        }
      });

      if (sortby) {
        const order = sort === 'ASC' ? 'ASC' : 'DESC';
        queryBuilder.orderBy(`turno.${sortby}`, order);
      }
      const skip = page * size;
      console.log("page: ", page, "size", size,  page * size);
      queryBuilder.skip(skip).take(size);
      const [data, total] = await queryBuilder.getManyAndCount();
      return {
        total,
        data,
      };
    } catch (error) {
      console.error('Error al buscar turnos:', error);
      throw error; // O maneja el error de alguna manera
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} turno`;
  }

  update(id: number, updateTurnoDto: UpdateTurnoDto) {
    return `This action updates a #${id} turno`;
  }

  remove(id: number) {
    return `This action removes a #${id} turno`;
  }
}
