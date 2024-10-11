// src/turno/dto/turno-params.dto.ts

import { IsOptional, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { TableParamsDto } from '../../common/dto/table-params.dto';

export class DependenciaParamsDto extends TableParamsDto {
  @IsOptional()
  @IsString()
  Id?: string;

  @IsOptional()
  @IsString()
  Nombre?: string;

  @IsOptional()
  @IsString()
  Abreviatura?: string;

  @IsOptional()
  @IsString()
  Aeropuerto?: string;

  @IsOptional()
  @IsString()
  Categoria?: string;

  @IsOptional()
  @IsString()
  AvisoVencimiento?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  Procedencia?: Date;

  @IsOptional()
  @IsString()
  PermiteCsv?: string;
}
