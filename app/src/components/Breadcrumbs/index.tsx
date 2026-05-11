import { Link } from '@tanstack/react-router';
import type BreadcrumbsProps from './types';
import { Fragment } from 'react/jsx-runtime';

export default function Breadcrumbs({ links }: BreadcrumbsProps) {
  return (
    <menu className="capitalize w-full" data-testid="breadcrumbs">
      {links.slice(0, -1).map((linkOptions) => (
        <Fragment key={linkOptions.to}>
          <Link {...linkOptions} className="text-yellow">
            {linkOptions.label}
          </Link>
          <span className="after:content-['_>_']" />
        </Fragment>
      ))}
      {links.at(-1)!.label}
    </menu>
  );
}
