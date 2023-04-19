import { Home } from "@/pages";
import { MainLayouts } from "../layouts/MainLayouts";
import { Page404 } from "@/pages/404";
import { PATH } from "@/config/path";
import { Product } from "@/pages/product";
import { ShoppingCart } from "@/pages/shopping-cart";
import { Checkout } from "@/pages/checkout";
import { Auth } from "@/pages/auth";
import { AccountAddressEdit } from "@/pages/accountAddressEdit";
import { AccountAdress } from "@/pages/accountAdress";
import { AccountOrder } from "@/pages/accountOrder";

export const routers = [
  {
    element: <MainLayouts />,
    children: [
      {
        path: PATH.home,
        element: <Home />,
      },

      {
        path: PATH.product,
        element: <Product />,
      },

      {
        path: PATH.shopping_cart,
        element: <ShoppingCart />,
      },
      {
        path: PATH.auth,
        element: <Auth />,
      },
      {
        path: PATH.accountAddressEdit,
        element: <AccountAddressEdit />,
      },
      {
        path: PATH.accountAdress,
        element: <AccountAdress />,
      },
      {
        path: PATH.accountOrder,
        element: <AccountOrder />,
      },

      {
        path: PATH.checkout,
        element: <Checkout />,
      },

      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];
