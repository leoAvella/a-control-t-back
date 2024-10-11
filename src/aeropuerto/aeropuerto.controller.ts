import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AeropuertoService } from './aeropuerto.service';
import { CreateAeropuertoDto } from './dto/create-aeropuerto.dto';
import { UpdateAeropuertoDto } from './dto/update-aeropuerto.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiQueries } from 'src/common/decorators/api-queries.decorator';
import { aeropuertoTableParams } from './params/regionalTableParams';
import { AeropuertoParamsDto } from './dto/aeropuerto-params.dto';

@ApiTags('Acciones aeropuerto')
@Controller('aeropuerto')
export class AeropuertoController {
  constructor(private readonly aeropuertoService: AeropuertoService) {}

  @Post()
  create(@Body() createAeropuertoDto: CreateAeropuertoDto) {
    return this.aeropuertoService.create(createAeropuertoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Obtener todos  aeropuertos con filtros y paginación',
  })
  @ApiQueries(aeropuertoTableParams)
  @ApiResponse({ status: 200, description: 'Lista de turnos' })
  findAll(@Query() query: AeropuertoParamsDto): Promise<any> {
    return this.aeropuertoService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aeropuertoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAeropuertoDto: UpdateAeropuertoDto) {
    return this.aeropuertoService.update(+id, updateAeropuertoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aeropuertoService.remove(+id);
  }
}
