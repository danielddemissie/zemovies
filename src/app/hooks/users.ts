import { useQuery } from 'react-query';
import { Axios } from 'app/config';
import { backendUrl } from 'app/config/env';

export const useGetUserProfile = token => {
  return useQuery('user-profile', () => {
    return Axios({
      method: 'GET',
      route: `${backendUrl}/users/profile`,
      token,
    });
  });
};
