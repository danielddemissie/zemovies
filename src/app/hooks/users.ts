import { useQuery } from 'react-query';
import { Axios } from 'app/config';
import { backendUrl } from 'app/config/env';

export const useGetUserProfile = token => {
  return useQuery(
    'user-profile',
    () => {
      return Axios({
        method: 'GET',
        route: `${backendUrl}/users/profile`,
        token,
      });
    },
    {
      enabled: token !== '',
    },
  );
};

export const useOauth = credientialRef => {
  return Axios({
    method: 'POST',
    route: `${backendUrl}/oauth/google`,
    data: {
      credientialRef,
    },
  });
};
