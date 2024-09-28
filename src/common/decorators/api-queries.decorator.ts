import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export function ApiQueries(queries: any[]) {
  return applyDecorators(
    ...queries.map((query) =>
      ApiQuery({
        name: query.name,
        required: query.required,
        type: query.type,
        enum: query.enum,
        description: query.description,
        example: query.example,
      }),
    ),
  );
}
