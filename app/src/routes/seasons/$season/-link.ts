import { linkOptions } from '@tanstack/react-router';
import seasonsLinkOptions from '../-link';

const seasonLinkOptions = (season: string) =>
  linkOptions([
    ...seasonsLinkOptions,
    {
      to: '/seasons/$season',
      label: season,
      params: {
        season,
      },
    },
  ]);

export default seasonLinkOptions;
