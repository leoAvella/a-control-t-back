// src/turno/dto/turno-params.dto.ts

import { IsOptional, IsString, IsDate, Matches, ValidateIf } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { TableParamsDto } from '../../common/dto/table-params.dto';

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

  // @IsOptional()
  // @Matches(/^\d{2}\/\d{2}\/\d{2}$/, {
  //   message: 'fecha must be in DD/MM/YY format',
  // })
  // fecha?: string;
  // Cambiamos la validación de fecha a string


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
