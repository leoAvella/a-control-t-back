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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { DependenciaService } from './dependencia.service';
import { CreateDependenciaDto } from './dto/create-dependencia.dto';
import { UpdateDependenciaDto } from './dto/update-dependencia.dto';
import { DependenciaParamsDto } from './dto/dependencia-params.dto';
import { ApiQueries } from 'src/common/decorators/api-queries.decorator';
import { dependenciaTableParams } from './params/dependenciaTableParams';

@ApiTags('Dependencia')
@Controller('dependencia')
export class DependenciaController {
  constructor(private readonly dependenciaService: DependenciaService) {}

  @Post()
  create(@Body() createDependenciaDto: CreateDependenciaDto) {
    return this.dependenciaService.create(createDependenciaDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Obtener todas las dependencias',
  })
  @ApiQueries(dependenciaTableParams)
  @ApiResponse({ status: 200, description: 'Lista de dependencias' })
  findAll(@Query() query: DependenciaParamsDto): Promise<any> {
    return this.dependenciaService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dependenciaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDependenciaDto: UpdateDependenciaDto,
  ) {
    return this.dependenciaService.update(+id, updateDependenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dependenciaService.remove(+id);
  }
}
