import axios, { AxiosRequestConfig } from "axios";

const ApiClient = axios.create({
  baseURL: import.meta.env.VITE_RESTAPI_HOST,
});

export class RestAPI {
  static get<TResponse>(url: string, config?: AxiosRequestConfig) {
    return ApiClient.get<TResponse>(url, config);
  }

  static post<TData, TResponse>(
    url: string,
    data?: TData,
    config?: AxiosRequestConfig
  ) {
    return ApiClient.post<TResponse>(url, data, config);
  }

  static put<TData, TResponse>(
    url: string,
    data?: TData,
    config?: AxiosRequestConfig
  ) {
    return ApiClient.put<TResponse>(url, data, config);
  }

  static delete<T>(url: string, config?: AxiosRequestConfig) {
    return ApiClient.delete<T>(url, config);
  }
}
