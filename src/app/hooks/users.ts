import { useQuery } from 'react-query';
import { API } from 'app/config';

export const useUsers = () => {
  return useQuery('users', async () => {
    return await API({
      method: 'GET',
      route: '/users',
      token: 'eyu',
    });
  });
};
