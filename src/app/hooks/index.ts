import { useGetUsers } from './users';
import {
  usegGetPopular,
  usegGetUpcoming,
  usegGetTopRated,
  usegGetNowPlaying,
} from './movies';

export {
  useGetUsers as useUsers,
  usegGetNowPlaying as useNowPlaying,
  usegGetPopular as usePopular,
  usegGetUpcoming as useUpcoming,
  usegGetTopRated as useTopRated,
};
