const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export function getAlignmentClass(alignment?: keyof typeof alignmentClasses) {
  if (!alignment) return undefined;
  return alignmentClasses[alignment] || undefined;
}
