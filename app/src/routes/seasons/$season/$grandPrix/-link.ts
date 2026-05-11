import { linkOptions } from '@tanstack/react-router';
import seasonLinkOptions from '../-link';
import clearSlug from '~/utils/clearSlug';

const seasonGrandPrixLinkOptions = (season: string, grandPrix: string) =>
  linkOptions([
    ...seasonLinkOptions(season),
    {
      to: '/seasons/$season/$grandPrix',
      label: clearSlug(grandPrix),
      params: {
        season,
        grandPrix,
      },
    },
  ]);

export default seasonGrandPrixLinkOptions;
