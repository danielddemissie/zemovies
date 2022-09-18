import { lazyLoad } from 'utils/loadable';
export const Signup = lazyLoad(
  () => import('./index'),
  module => module.Signup,
);
