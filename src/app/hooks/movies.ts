/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query';
import { Axios } from 'app/config';

export const usegGetPopular = (page = 1) => {
  return useQuery(['popular', page], () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: 'https://api.themoviedb.org/3/movie/popular',
      params: {
        page,
      },
    });
  });
};

export const usegGetNowPlaying = (page = 1) => {
  return useQuery('now-playing', () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: 'https://api.themoviedb.org/3/movie/now_playing',
      params: {
        page,
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

export const useGetdetail = (mediaType, id) => {
  return useQuery(['movie', id], () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: `https://api.themoviedb.org/3/${mediaType}/${id}`,
    });
  });
};

export const useGetRelated = (mediaType, id) => {
  return useQuery(['similar', id], () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: `https://api.themoviedb.org/3/${mediaType}/${id}'/similar`,
    });
  });
};

export const useGetVideo = (mediaType, id) => {
  return useQuery(['video', id], () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: `https://api.themoviedb.org/3/${mediaType}/${id}'/videos`,
    });
  });
};

export const useGetCredit = (mediaType, id) => {
  return useQuery(['credit', id], () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: `https://api.themoviedb.org/3/${mediaType}/${id}'/credits`,
    });
  });
};

export const useGetDiscover = (mediaType, page = 1) => {
  return useQuery([`discover/${mediaType}`, page], () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: `https://api.themoviedb.org/3/discover/${mediaType}`,
      params: {
        page,
      },
    });
  });
};

export const useGetGenres = mediaType => {
  return useQuery(['genres', mediaType], () => {
    return Axios({
      method: 'GET',
      token: process.env.REACT_APP_API_TOKEN,
      route: `https://api.themoviedb.org/3/genre/${mediaType}/list`,
    });
  });
};

export const useGetSearchMovie = (mediaType, query, page = 1) => {
  return useQuery(
    [`search/${query}`, page],
    () => {
      return Axios({
        method: 'GET',
        token: process.env.REACT_APP_API_TOKEN,
        route: `https://api.themoviedb.org/3/search/${mediaType}`,
        params: {
          query: query,
          page: page,
        },
      });
    },
    { enabled: Boolean(query) },
  );
};

export const useGetFilterhMovie = (mediaType, filter) => {
  return useQuery(
    ['filter', filter],
    () => {
      return Axios({
        method: 'GET',
        token: process.env.REACT_APP_API_TOKEN,
        route: `https://api.themoviedb.org/3/discover/${mediaType}`,
        params: {
          with_genres: filter,
        },
      });
    },
    { enabled: Boolean(filter) },
  );
};
