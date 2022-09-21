import { useQuery } from 'react-query';
import { Axios } from 'app/config';

export const useGetUsers = () => {
  return useQuery('users', () => {
    return Axios({
      method: 'GET',
      route: '/users',
      token: 'eyu',
    });
  });
};
