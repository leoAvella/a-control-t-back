import { IsInt, IsOptional, IsString } from 'class-validator';
import { TableParamsDto } from '../../common/dto/table-params.dto';

export class RegionalParamsDto extends TableParamsDto {
  @IsOptional()
  @IsInt()
  regId: number;

  @IsOptional()
  @IsString()
  regNombre: string;
}
