import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RegionalService } from './regional.service';
import { CreateRegionalDto } from './dto/create-regional.dto';
import { UpdateRegionalDto } from './dto/update-regional.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiQueries } from 'src/common/decorators/api-queries.decorator';
import { regionalTableParams } from './params/regionalTableParams';
import { RegionalParamsDto } from './dto/regional-params.dto';

@Controller('regional')
export class RegionalController {
  constructor(private readonly regionalService: RegionalService) {}

  @Post()
  create(@Body() createRegionalDto: CreateRegionalDto) {
    return this.regionalService.create(createRegionalDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Obtener todos  regionales con filtros y paginación',
  })
  @ApiQueries(regionalTableParams)
  @ApiResponse({ status: 200, description: 'Lista de turnos' })
  findAll(@Query() query: RegionalParamsDto): Promise<any> {
    return this.regionalService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionalDto: UpdateRegionalDto) {
    return this.regionalService.update(+id, updateRegionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionalService.remove(+id);
  }
}
