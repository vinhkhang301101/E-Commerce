import { authService } from "@/services/auth";
import axios from "axios";
import { getToken, setToken } from "@/utils/token";

export const PRODUCT_API = import.meta.env.VITE_PRODUCT_API;
export const AUTHEN_API = import.meta.env.VITE_AUTHEN_API;
export const USER_API = import.meta.env.VITE_USER_API;
export const CART_API = import.meta.env.VITE_CART_API

let refreshTokenPromise = null

export const http = axios.create();
http.interceptors.response.use(
  (res) => {
    return res.data;
  },
  async (error) => {
    try {
      if (
        (error.response.status === error.response.data.error_code) ===
        "TOKEN_EXPIRED"
      ) {
        if(refreshTokenPromise) {
          await refreshTokenPromise
        } else {
          // refresh token
          console.log("refreshToken");
          const token = getToken();
          const refreshTokenPromise = await authService.refreshToken({
            refreshToken: token.refreshToken,
          });
  
          const res = await refreshTokenPromise
  
          setToken(res.data);
          refreshTokenPromise = null
        }
        return http(error.config);
      }
    } catch (error) {}
    throw error;
  }
);

http.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token.accessToken}`;
  }
  return config;
});
