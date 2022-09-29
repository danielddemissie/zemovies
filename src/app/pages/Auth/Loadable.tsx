import { lazyLoad } from 'utils/loadable';
export const Auth = lazyLoad(
  () => import('./index'),
  module => module.Auth,
);
