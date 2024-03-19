import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:8000',
  params: {},
});

const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const accessToken: string | null = localStorage.getItem('auth');

  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

apiInstance.interceptors.request.use(onRequest);

export default apiInstance;
