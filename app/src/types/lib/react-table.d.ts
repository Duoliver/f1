import '@tanstack/react-table';

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData, TValue> {
    textAlign?: 'left' | 'center' | 'right';
    getCellContext?: (
      context: CellContext<TData, TValue>
    ) => TableCellProps | void;
  }
}
