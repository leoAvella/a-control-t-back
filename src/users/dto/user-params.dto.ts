import { IsString, IsOptional, IsDateString, IsNumber, IsEmail, MaxLength } from 'class-validator';
import { TableParamsDto } from 'src/common/dto/table-params.dto';

export class UserParamsDto extends TableParamsDto {
  
  @IsOptional()
  @IsString()
  @MaxLength(200)
  nombre: string;

  @IsOptional()
  @IsNumber()
  nivel?: number;

  @IsOptional()
  @IsNumber()
  grado?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  numLicencia?: string;

  @IsOptional()
  @IsDateString()
  fvCertMedico?: Date;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  direccion?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  telefono?: string;

  @IsOptional()
  @IsString()
  @MaxLength(15)
  celular?: string;

  @IsOptional()
  @IsDateString()
  fechaIngreso?: Date;

  @IsOptional()
  @IsDateString()
  fechaTraslado?: Date;

  @IsOptional()
  @IsDateString()
  fvCurso?: Date;

  @IsOptional()
  @IsDateString()
  fvEvaluacion?: Date;

  @IsOptional()
  @IsNumber()
  sueldo?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  usuario?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  clave?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  alias?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  estado?: string;

  @IsOptional()
  @IsNumber()
  dependencia: number;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  horasExtras?: string;

  @IsOptional()
  @IsNumber()
  puntaje?: number;

  @IsOptional()
  @IsNumber()
  cantMaxHorasExtras?: number;

  @IsOptional()
  @IsNumber()
  categoriaDominical?: number;

  @IsOptional()
  @IsNumber()
  cantidadRop?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  certMedico?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  descansoSemana?: string;

  @IsOptional()
  @IsNumber()
  horaExtraExc?: number;

  @IsOptional()
  @IsNumber()
  intentosFallidos?: number;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  cargo?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(100)
  correoElectronico?: string;

  @IsOptional()
  @IsNumber()
  supervisor: number;

  @IsOptional()
  @IsDateString()
  fvEvalCompLinguistica?: Date;

  @IsOptional()
  @IsNumber()
  nivelLinguistica?: number;
}
