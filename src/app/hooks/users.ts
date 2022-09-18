import { useQuery } from 'react-query';
import { Axios } from 'app/config';

export const useUsers = () => {
  return useQuery('users', () => {
    return Axios({
      method: 'GET',
      route: '/users',
      token: 'eyu',
    });
  });
};
