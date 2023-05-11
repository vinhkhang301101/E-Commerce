import { authService } from "@/services/auth";
import { userService } from "@/services/user";
import { clearToken, clearUser, getUser, setToken, setUser } from "@/utils";
import { message } from "antd";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(getUser);

  const login = async (data) => {
    try {
      const res = await authService.login(data);
      if (res.data) {
        setToken(res.data);
        const user = await userService.getUserService();
        setUser(user.data);
        _setUser(user.data);
        message.success("Login Success!");
        // navigate(PATH.Profile.index);
      }
    } catch (err) {
      console.log(err);
      if (err?.response?.data?.message) {
        message.error(err.response.data.message);
      }
    }
  };

  const logout = () => {
    clearToken()
    clearUser()
    setUser(null)
    message.success("Logout Success!")
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
