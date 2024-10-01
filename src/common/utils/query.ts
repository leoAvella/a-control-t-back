import { Repository } from 'typeorm';

export const findWithPaginationAndFilters = async <Entity>(
  repository: Repository<Entity>,
  params: any,
  entityAlias: string,
): Promise<{ data: Entity[]; total: number }> => {
  try {
    const { page, size, sort, sortby, ...filters } = params;
    const queryBuilder = repository.createQueryBuilder(entityAlias);
    Object.keys(filters).forEach((key) => {
      const value = filters[key];
      if (value !== undefined && value !== null) {
        queryBuilder.andWhere(`${entityAlias}.${key} = :${key}`, {
          [key]: value,
        });
      }
    });

    if (sortby) {
      const order = sort === 'ASC' ? 'ASC' : 'DESC';
      queryBuilder.orderBy(`${entityAlias}.${sortby}`, order);
    }

    const skip = page * size;
    queryBuilder.skip(skip).take(size);

    const [data, total] = await queryBuilder.getManyAndCount();

    return {
      total,
      data,
    };
  } catch (error) {
    console.error(`Error al buscar ${entityAlias}:`, error);
    throw error;
  }
};
