/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query';
import { Axios } from 'app/config';

export const usegGetTrending = () => {
  return useQuery('trending', () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: 'https://api.themoviedb.org/3/trending/all/day',
    });
  });
};

export const usegGetUpcoming = () => {
  return useQuery('upcoming', () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: 'https://api.themoviedb.org/3/movie/upcoming',
    });
  });
};
