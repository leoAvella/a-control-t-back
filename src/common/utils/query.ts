import { Repository } from 'typeorm';
import { Param, ResponsePagination } from '../interfaces/params';
import { SortOption } from '../enums/sort-option.enum';

export const findWithPaginationAndFilters = async <Entity>(
  repository: Repository<Entity>,
  params: any,
  entityAlias: string,
  entityParams: Param[],
): Promise<ResponsePagination> => {
  try {
    const { page, size, sort, sortby, ...filters } = params;
    const _page = page ? page - 1 : 0;
    const queryBuilder = repository.createQueryBuilder(entityAlias);
    Object.keys(filters).forEach((key) => {
      const value = filters[key];
      const attr = entityParams.find((param) => param.name === key);
      if (attr && value !== undefined && value !== null) {
        if (attr?.useILike) {
          queryBuilder.andWhere(
            `LOWER(${entityAlias}.${key}) LIKE LOWER(:${key})`,
            { [key]: `%${value}%` },
          );
        } else {
          queryBuilder.andWhere(`${entityAlias}.${key} = :${key}`, {
            [key]: value,
          });
        }
      }
    });

    if (sortby) {
      const order = sort === SortOption.ASC ? SortOption.ASC : SortOption.DESC;
      queryBuilder.orderBy(`${entityAlias}.${sortby}`, order);
    }
    if (size != 0) {
      const skip = _page * (size || 10);
      queryBuilder.skip(skip).take(size || 10);
    }

    const [data, total] = await queryBuilder.getManyAndCount();

    return {
      totalRows: total,
      data,
      page: parseInt(page) || 0,
      totalPages: size != 0 ? Math.ceil(total / (size || 10)) : total,
    };
  } catch (error) {
    console.error(`Error al buscar ${entityAlias}:`, error);
    throw error;
  }
};
