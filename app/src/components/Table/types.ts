import { type ColumnDef } from '@tanstack/react-table';

export default interface TableProps<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[];
  data: T[];
}
