import { Home } from "@/pages";
import { MainLayouts } from "../layouts/MainLayouts";
import { Page404 } from "@/pages/404";
import { PATH } from "@/config/path";
import { Product } from "@/pages/product";
import { ShoppingCart } from "@/pages/shopping-cart";

export const routers = [
  {
    element: <MainLayouts />,
    children: [
      {
        path: "/",
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
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];