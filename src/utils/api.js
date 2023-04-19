import { authService } from "@/services/auth"
import axios from "axios"
// import { getToken, setToken } from "../utils/token"

export const USER_API = import.meta.env.VITE_USER_API
export const AUTHENTICATION_API = import.meta.env.VITE_AUTHENTICATION_API;

export const http = axios.create()
http.interceptors.response.use((res) => {
    return res.data
}, async (error) => {
    try {
        if (error.response.status === error.response.data.error_code === "TOKEN_EXPIRED") {
            // refresh token
            console.log('refreshToken')
            const token = getToken()
            const res = await authService.refreshToken({
                refreshToken: token.refreshToken
            })

            setToken(res.data)

            return http(error.config)
        }
    } catch (error) {

    }
    throw error
})

http.interceptors.response.use((config) => {
    const token = getToken()
    if (token) {
        config.headers['Authorization'] = `Bearer ${token.accessToken}`
    }
    return config
})