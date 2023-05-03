import { AUTHEN_API } from "@/config/api";
import { http } from "@/utils";

export const authService = {
  loginByCode(data) {
    console.log("data1 ",data)
    return http.post(`${AUTHEN_API}/login-by-code`, data);
  },
  login(data) {
    console.log(data)
    return http.post(`${AUTHEN_API}/login`, data)
  },
 
};
