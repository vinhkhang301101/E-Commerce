export const userService = {
    register(data){
        return http.post(`${USER_API}/register`, data)
    }
}