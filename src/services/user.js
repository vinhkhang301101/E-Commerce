import { USER_API, http } from "@/utils";

export const userService = {
  register(data) {
    console.log(data.email)
    return http.post(`${USER_API}/register`, data);
  },
  getUser() {
    return http.get(`${USER_API}`);
  },
  resendEmail() {
    return http.post(`${USER_API}/resend-email`)
  }
};
