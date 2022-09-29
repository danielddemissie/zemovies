/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query';
import { Axios } from 'app/config';

export const usegGetPopular = () => {
  return useQuery('trending', () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: 'https://api.themoviedb.org/3/movie/popular',
      params: {
        page: 1,
        size: 10,
      },
    });
  });
};

export const usegGetNowPlaying = () => {
  return useQuery('popular', () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: 'https://api.themoviedb.org/3/movie/now_playing',
      params: {
        page: 1,
        size: 10,
      },
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

export const usegGetTopRated = () => {
  return useQuery('toprated', () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: 'https://api.themoviedb.org/3/movie/top_rated',
    });
  });
};

export const useGetdetail = id => {
  return useQuery(['movie', id], () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: `https://api.themoviedb.org/3/movie/${id}`,
    });
  });
};

export const useGetRelated = id => {
  return useQuery(['similar', id], () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: `https://api.themoviedb.org/3/movie/${id}'/similar`,
    });
  });
};