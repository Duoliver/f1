import type { RenderOptions } from '@testing-library/react';

export default interface RenderWithFileRoutesOptions extends Omit<
  RenderOptions,
  'wrapper'
> {
  initialLocation?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  routerContext?: any;
}
