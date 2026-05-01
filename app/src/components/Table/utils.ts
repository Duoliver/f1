import type { Cell } from '@tanstack/react-table';

const alignmentClasses = {
  left: 'md:text-start',
  center: 'md:text-center',
  right: 'md:text-end',
};

const baseClasses = 'flex justify-between text-end md:table-cell';

export function getAlignmentClass(alignment?: keyof typeof alignmentClasses) {
  if (!alignment) return undefined;
  return alignmentClasses[alignment] || undefined;
}

export function getCellAdditionalClasses<T>(cell: Cell<T, unknown>) {
  const meta = cell.column.columnDef.meta;

  if (!meta) return '';

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

export function getCellClass<T>(cell: Cell<T, unknown>) {
  return `${baseClasses} ${getCellAdditionalClasses(cell)}`;
}
