import { Home } from "@/pages";
import { MainLayouts } from "../layouts/MainLayouts";
import { Page404 } from "@/pages/404";
import { PATH } from "@/config/path";
import { Product } from "@/pages/product";
import { ShoppingCart } from "@/pages/shopping-cart";
import { Checkout } from "@/pages/checkout";
import { Account } from "@/pages/account";
import { ProductDetailPages } from "@/pages/[slug]";
import { PrivateRoute } from "@/components/PrivateRoute";
import { profile } from "./profile";

export const routers = [
  {
    element: <MainLayouts />,
    children: [
      {
        path: PATH.Home,
        element: <Home />,
      },

      {
        path: PATH.Product,
        element: <Product />,
      },

      {
        path: PATH.ProductDetail,
        element: <ProductDetailPages />,
      },

      {
        path: PATH.Category,
        element: <Product />,
      },

      {
        path: PATH.ShoppingCart,
        element: <ShoppingCart />,
      },

      {
        element: <PrivateRoute />,
        children: profile,
        path: PATH.Profile.index,
      },

      {
        element: <GuestRoute redirect={PATH.Profile.index} />,
        children: [
          {
            index: true,
            element: <Account />,
          },
        ],
        path: PATH.Account,
      },

      {
        path: PATH.Checkout,
        element: <Checkout />,
      },

      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];
