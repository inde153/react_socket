import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:8000',
  params: {},
  withCredentials: true,
});

const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const accessToken: string | null = localStorage.getItem('auth');

  return config;
};

// axios.interceptors.response.use(
//   async (response: AxiosResponse) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

apiInstance.interceptors.request.use(onRequest);

export default apiInstance;
