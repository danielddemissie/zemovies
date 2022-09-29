import { lazyLoad } from 'utils/loadable';

export const SeriesPage = lazyLoad(
  () => import('./index'),
  module => module.SeriesPage,
);
