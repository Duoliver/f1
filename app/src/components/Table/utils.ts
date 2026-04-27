import type { Cell } from '@tanstack/react-table';

const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export function getAlignmentClass(alignment?: keyof typeof alignmentClasses) {
  if (!alignment) return undefined;
  return alignmentClasses[alignment] || undefined;
}

export function getCellClass<T>(cell: Cell<T, unknown>) {
  const meta = cell.column.columnDef.meta;

  if (!meta) return undefined;

  if (meta.getCellContext) {
    const additionalClasses =
      meta.getCellContext(cell.getContext())?.className || '';
    if (meta.textAlign) {
      return `${getAlignmentClass(meta.textAlign)} ${additionalClasses}`;
    }
    return additionalClasses;
  }

  return getAlignmentClass(meta.textAlign);
}
