import { PrivateRoute } from "@/components/PrivateRoute";
import { PATH } from "@/config/path";
import { Profile } from "@/pages/profile";
import { Address } from "@/pages/profile/address";
import { Order } from "@/pages/profile/order";
import { Payment } from "@/pages/profile/payment";
import { Wishlist } from "@/pages/profile/wishlist";
import { Children } from "react";

export const profile = [
    {
        element: <Profile/>,
        index: true
    },

    {
        element: <Order/>,
        path: PATH.Profile.Order
    },

    {
        element: <Wishlist/>,
        path: PATH.Profile.Wishlist
    },

    {
        element: <Address/>,
        path: PATH.Profile.Address
    },

    {
        element: <Payment/>,
        path: PATH.Profile.Payment
    },

]