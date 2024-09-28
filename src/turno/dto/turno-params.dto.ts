// src/turno/dto/turno-params.dto.ts

import { IsOptional, IsString, IsDate, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { TableParamsDto } from '../../common/dto/table-params.dto';
import { SortOption } from '../../common/enums/sort-option.enum';

export class TurnoParamsDto extends TableParamsDto {
  @IsOptional()
  @IsString()
  programacion?: string;

  @IsOptional()
  @IsString()
  funcionario?: string;

  @IsOptional()
  @IsString()
  posicionJornada?: string;

  @IsOptional()
  @IsString()
  tipo?: string;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  @IsString()
  turnoOriginal?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  fecha?: Date;

  @IsOptional()
  @IsString()
  horaInicio?: string;

  @IsOptional()
  @IsString()
  horaFin?: string;

  @IsOptional()
  @IsString()
  minutoInicio?: string;

  @IsOptional()
  @IsString()
  minutoFin?: string;
}
