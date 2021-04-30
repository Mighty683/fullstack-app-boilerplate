import axios, { AxiosRequestConfig, Method } from 'axios';
import {store} from "../../store";

type RequestOptions = {
    path: string,
    data?: Record<string, any>,
    authorize?: boolean,
    params?: Record<string, unknown>,
    target?: 'external'
}

export  async function getRequestConfig(
  method: Method,
  options: RequestOptions
): Promise<AxiosRequestConfig> {
  const config: AxiosRequestConfig = {
    headers: {},
  };
  let url;

  if (options.data) {
    config.data = options.data;
  }

  if (options.params) {
    config.params = options.params;
  }

  if (options.authorize) {
    const { auth } = store.getState();
    config.headers.authorization = `Bearer ${auth.token}`;
  }


  if (options.target === 'external') {
    url = options.path;
  } else {
    url = `${process.env.REACT_APP_API_HOST}/${options.path}`;
  }

  config.url = url;
  config.method = method;

  return config;
}

export async function request<R> (
  method: Method,
  options: RequestOptions): Promise<R> {

  const config = await getRequestConfig(method, options);
  const response = await axios.request(config);
  return response.data;
}

/**
 * R - Dynamic typing for response
 */
export function get<R> (options: RequestOptions): Promise<R> {
  return request('GET', options);
}

export function post<R> (options: RequestOptions): Promise<R> {
  return request('POST', options);
}

export function patch<R> (options: RequestOptions): Promise<R> {
  return request('PATCH', options);
}
