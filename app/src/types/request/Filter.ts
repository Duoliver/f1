export default interface Filter<T> {
  _sort: {
    key: keyof T;
    order: FilterSortOrder;
  };
}

export type FilterSortOrder = 'ASC' | 'DESC';
