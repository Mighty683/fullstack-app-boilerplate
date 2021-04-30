import {SelectQueryBuilder} from "typeorm";

export function PaginateQuery<T>(query: SelectQueryBuilder<T>, page = 1, pageSize = 20): SelectQueryBuilder<T> {
  query.offset((page - 1) * pageSize);
  query.limit(pageSize);
  return query;
}