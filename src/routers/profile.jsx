// import { PrivateRoute } from "@/components/PrivateRoute";
import { PATH } from "@/config/path";
import { ProfileLayout } from "@/layouts/ProfileLayout";
import { Profile } from "@/pages/profile";
import { Address } from "@/pages/profile/address";
// import { Info } from "@/pages/profile/info";
import { Order } from "@/pages/profile/order";
import { Payment } from "@/pages/profile/payment";
import { Wishlist } from "@/pages/profile/wishlist";

export const profile = [
  {
    element: <ProfileLayout />,
    children: [
      {
        element: <Profile />,
        index: true,
      },

      {
        element: <Order />,
        path: PATH.Profile.Order,
      },

      {
        element: <Wishlist />,
        path: PATH.Profile.Wishlist,
      },

      {
        element: <Address />,
        path: PATH.Profile.Address,
      },

      {
        element: <Payment />,
        path: PATH.Profile.Payment,
      },
    ],
  },
];