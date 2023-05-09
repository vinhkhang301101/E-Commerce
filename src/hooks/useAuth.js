// import { useSelector } from "react-redux";

import { createContext } from "react";

// export const useAuth = () => useSelector(store => store.auth)

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);