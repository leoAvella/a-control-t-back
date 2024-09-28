import { IsInt, IsOptional, IsEnum, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { SortOption } from '../enums/sort-option.enum';

export class TableParamsDto {
  @IsInt()
  @Type(() => Number)
  page: number = 0;

  @IsInt()
  @Type(() => Number)
  size: number = 10;

  @IsEnum(SortOption)
  sort: SortOption = SortOption.ASC;

  @IsOptional()
  @IsString()
  sortby?: string;
}
