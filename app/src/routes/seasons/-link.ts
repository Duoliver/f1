import { linkOptions } from '@tanstack/react-router';
import homeLinkOptions from '../-link';

const seasonsLinkOptions = linkOptions([
  ...homeLinkOptions,
  {
    to: '/seasons',
    label: 'Seasons',
  },
]);

export default seasonsLinkOptions;
