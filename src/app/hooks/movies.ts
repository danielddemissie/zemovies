/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query';
import { Axios } from 'app/config';
import { tmdbApiToken, tmdbUrl } from 'app/config/env';

export const usegGetPopular = (page = 1) => {
  return useQuery(['popular', page], () => {
    return Axios({
      method: 'GET',
      token: tmdbApiToken,
      route: `${tmdbUrl}/movie/popular`,
      params: {
        page,
      },
    });
  });
};

export const usegGetNowPlaying = (page = 1) => {
  return useQuery('now-playin`', () => {
    return Axios({
      method: 'GET',
      token: tmdbApiToken,
      route: `${tmdbUrl}/movie/now_playing`,
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
      token: tmdbApiToken,
      route: `${tmdbUrl}/movie/upcoming`,
    });
  });
};

export const usegGetTopRated = () => {
  return useQuery('toprated', () => {
    return Axios({
      method: 'GET',
      token: tmdbApiToken,
      route: `${tmdbUrl}/movie/top_rated`,
    });
  });
};

export const useGetdetail = (mediaType, id) => {
  return useQuery(['movie', id], () => {
    return Axios({
      method: 'GET',
      token: tmdbApiToken,
      route: `${tmdbUrl}/${mediaType}/${id}`,
    });
  });
};

export const useGetRelated = (mediaType, id) => {
  return useQuery(['similar', id], () => {
    return Axios({
      method: 'GET',
      token: tmdbApiToken,
      route: `${tmdbUrl}/${mediaType}/${id}'/similar`,
    });
  });
};

export const useGetVideo = (mediaType, id) => {
  return useQuery(['video', id], () => {
    return Axios({
      method: 'GET',
      token: tmdbApiToken,
      route: `${tmdbUrl}/${mediaType}/${id}'/videos`,
    });
  });
};

export const useGetCredit = (mediaType, id) => {
  return useQuery(['credit', id], () => {
    return Axios({
      method: 'GET',
      token: tmdbApiToken,
      route: `${tmdbUrl}/${mediaType}/${id}'/credits`,
    });
  });
};

export const useGetDiscover = (mediaType, page = 1) => {
  return useQuery([`discover/${mediaType}`, page], () => {
    return Axios({
      method: 'GET',
      token: tmdbApiToken,
      route: `${tmdbUrl}/discover/${mediaType}`,
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
      token: tmdbApiToken,
      route: `${tmdbUrl}/genre/${mediaType}/list`,
    });
  });
};

export const useGetSearchMovie = (mediaType, query, page = 1) => {
  return useQuery(
    [`search/${query}`, page],
    () => {
      return Axios({
        method: 'GET',
        token: tmdbApiToken,
        route: `${tmdbUrl}/search/${mediaType}`,
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
        token: tmdbApiToken,
        route: `${tmdbUrl}/discover/${mediaType}`,
        params: {
          with_genres: filter,
        },
      });
    },
    { enabled: Boolean(filter) },
  );
};
