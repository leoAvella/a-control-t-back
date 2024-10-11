import { IsInt, IsOptional, IsString } from 'class-validator';
import { TableParamsDto } from '../../common/dto/table-params.dto';

export class AeropuertoParamsDto extends TableParamsDto {
  @IsOptional()
  @IsInt()
  aeId: number;

  @IsOptional()
  @IsString()
  aeNombre: string;

  @IsOptional()
  @IsInt()
  aeCiudad: number;

  @IsOptional()
  @IsString()
  aeRegional?: number;

  @IsOptional()
  @IsString()
  aeEsInternacional?: string;
}
