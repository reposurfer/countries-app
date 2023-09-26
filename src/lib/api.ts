import axios, { AxiosError, AxiosResponse } from 'axios';

interface Country {

}

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

axios.interceptors.response.use(
    (res) => res,
    (error: AxiosError) => {
      const { data, status } = error.response!;
      switch (status) {
        case 400:
          console.error(data);
          break;
  
        case 401:
          console.error('unauthorised');
          break;
  
        case 404:
          console.error('/not-found');
          break;
  
        case 500:
          console.error('/server-error');
          break;
      }
      return Promise.reject(error);
    }
  );

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
};

const countries = {
  list: () => request.get<Country[]>('/all'),
  details: (name: string) => request.get<Country>(`/name/${name}`),
};

const api = {
  countries,
};

export default api;