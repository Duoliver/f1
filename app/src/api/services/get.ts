import type { FilterSortOrder } from '../../types/request/Filter';
import type Filter from '../../types/request/Filter';

const BASE_API_URL = 'http://localhost:3000/';

export default async function get<T>(
  resource: string,
  filter?: Filter<T> & Partial<T>
): Promise<Array<T>> {
  const queryParams = getQueryParams(filter);

  const response = await fetch(`${BASE_API_URL}${resource}${queryParams}`);
  return response.json();
}

function getQueryParams<T>(filter?: Filter<T> & Partial<T>): string {
  const params: Array<string> = [];

  if (!filter) {
    return '';
  }

  const { _sort, ...flatParams } = filter;

  if (_sort) {
    const key = filter._sort.key;
    const order = getSortOrder(filter._sort.order);
    params.push(`_sort=${order}${key as string}`);
  }

  params.push(...extractFlatParamsToQueryParams<T>(flatParams as Partial<T>));

  return `?${params.join('&')}`;
}

function extractFlatParamsToQueryParams<T>(flatParams: Partial<T>): string[] {
  return Object.keys(flatParams).map(
    (key) => `${key}=${flatParams[key as keyof Partial<T>]}`
  );
}

function getSortOrder(order: FilterSortOrder): string {
  if (order === 'DESC') {
    return '-';
  }
  return '';
}
