import type { LinkProps } from '@tanstack/react-router';

export default interface BreadcrumbsProps {
  links: readonly BreadcrumbsLink[];
}

export type BreadcrumbsLink = LinkProps & { label: string };
