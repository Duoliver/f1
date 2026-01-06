import { Link } from '@tanstack/react-router';
import type { SeasonLinkProps } from './types';

export default function SeasonLink({ year }: SeasonLinkProps) {
  return (
    <h2 className="text-center" key={year}>
      <Link to={`/seasons/$season`} params={{ season: year }}>
        {year}
      </Link>
    </h2>
  );
}
