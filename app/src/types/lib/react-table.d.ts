import '@tanstack/react-table';

declare module '@tanstack/table-core' {
  interface ColumnMeta {
    textAlign?: 'left' | 'center' | 'right';
  }
}
