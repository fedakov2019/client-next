import axios, { AxiosError, AxiosRequestConfig } from "axios";

const url = process.env.REACT_APP_HOST_URL;

<<<<<<< HEAD
export const apiInstance = axios.create({
  withCredentials: true,

=======


export const apiInstance = axios.create({
  withCredentials: true,

  baseURL: url,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
  },
});

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return apiInstance({
    ...config,
    ...options,
  })
    .then((r) => r.data)
    
    
};
export const createInstancer = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return instanceretry({
    ...config,
    ...options,
  }).then((r) => r.data);
};
export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;

export const instanceretry = axios.create({
  withCredentials: true,

>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
  baseURL: url,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
  },
});
<<<<<<< HEAD

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return apiInstance({
    ...config,
    ...options,
  }).then((r) => r.data);
};
export const createInstancer = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return instanceretry({
    ...config,
    ...options,
  }).then((r) => r.data);
};
export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;

export const instanceretry = axios.create({
  withCredentials: true,

  baseURL: url,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
  },
});
=======
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
apiInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("Token")}`;
  return config;
});
instanceretry.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("Token")}`;
  return config;
});
type LoginType = { accesToken: string };
instanceretry.interceptors.response.use(
  (config: any) => {
    return config;
  },
  async (error: any) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await apiInstance
          .post<LoginType>("/auth/sign-refrech")
          .then();
        localStorage.setItem("Token", response.data.accesToken);
        return instanceretry.request(originalRequest);
      } catch (e) {
        console.log("Не авторизован");
      }
    }
  },
);

export type ResponseTe<D = {}, Rs = ResultCode> = {
  userdata: D;
  messages: Array<string>;
  resultCode: Rs;
};
export type ResponseT<D = {}, Rs = ResultCode> = {
  UserData: D;
  messages: Array<string>;
  resultCode: Rs;
};
export enum ResultCode {
  Success = 0,
  Error = 1,
}

export type ItemT<T> = {
  items: Array<T>;
  totalCount: number;
  error: string | null;
};
