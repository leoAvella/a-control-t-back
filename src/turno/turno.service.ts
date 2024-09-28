import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turno } from './entities/turno.entity';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';

@Injectable()
export class TurnoService {
  constructor(
    @InjectRepository(Turno)
    private readonly turnoRepository: Repository<Turno>,
  ) {}
  create(createTurnoDto: CreateTurnoDto) {
    return 'This action adds a new turno';
  }

  async findAll(): Promise<Turno[]> {
    console.log({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    try {
      return await this.turnoRepository.find({
        take: 20,
      });
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
