/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const MoviesPage = lazyLoad(
  () => import('./index'),
  module => module.MoviesPage,
);
