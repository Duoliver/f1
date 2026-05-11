import type { ReactNode } from 'react';
import type { BreadcrumbsLink } from '~/components/Breadcrumbs/types';

export interface PageLayoutProps {
  title: string;
  children: ReactNode;
  breadcrumbLinks: readonly BreadcrumbsLink[];
}
