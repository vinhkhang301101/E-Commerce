import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

export const GuestRoute = ({ redirect = '/ ' }) => {
    const { user } = useAuth()
    const { state } = useLocation()
    if (user) return <Navigate to = {state?.redirect || redirect} />

    return <Outlet />
}