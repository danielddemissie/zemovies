import axios, { AxiosResponse } from 'axios';
type mehtods = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';

//defaultBaseURL
// axios.defaults.baseURL = `${
//   process.env.REACT_APP_BASE_URL || window.location.origin
// }`;

interface IAxiosProps {
  method: mehtods;
  route: string;
  params?: any;
  token?: string;
  data?: any;
}

export function Axios({ ...args }: IAxiosProps) {
  return new Promise<AxiosResponse>((resolve, reject) => {
    axios({
      method: args.method,
      url: args.route,
      data: args.data,
      headers: {
        Authorization: `Bearer ${args.token}`,
      },
      params: args.params,
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
}
