import { authService } from "@/services/auth.service"
import axios from "axios"
import { getToken, setToken } from "../utils/token"

export const USER_API = import.meta.env.VITE_USER_API
export const AUTHENTICATION_API = import.meta.env.VITE_AUTHENTICATION_API;

// export const api = axios.create()
// api.interceptors.response.use((res) => {
//     return res.data
// }, async (error) => {
//     try {
//         if (error.response.status === error.response.data.error_code === error)
//             // refresh token
//             console.log('refreshToken')
//             const token = getToken()
//             const res = await authService.refreshToken({
//                 refreshToken: token.refreshToken
//             })
//     }
// })