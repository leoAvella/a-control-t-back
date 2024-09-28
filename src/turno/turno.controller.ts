import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, getSchemaPath } from '@nestjs/swagger';

import { TurnoService } from './turno.service';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
import { Turno } from './entities/turno.entity';
import { TurnoParamsDto } from './dto/turno-params.dto';
import { ApiQueries } from 'src/common/decorators/api-queries.decorator';
import { turnoTableParams } from './params/turnoTableParams';

@Controller('turno')
export class TurnoController {
  constructor(private readonly turnoService: TurnoService) {}

  @Post()
  create(@Body() createTurnoDto: CreateTurnoDto) {
    return this.turnoService.create(createTurnoDto);
  }
  @Get()
  @ApiOperation({
    summary: 'Obtener todos los turnos con filtros y paginación',
  })
  @ApiQueries(turnoTableParams)
  @ApiResponse({ status: 200, description: 'Lista de turnos' })
  findAll(@Query() query: TurnoParamsDto): Promise<any> {
    return this.turnoService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turnoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurnoDto: UpdateTurnoDto) {
    return this.turnoService.update(+id, updateTurnoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turnoService.remove(+id);
  }
}
