import { Home } from "@/pages";
import { MainLayouts } from "../layouts/MainLayouts";
import { Page404 } from "@/pages/404";
import { PATH } from "@/config/path";
import { Product } from "@/pages/product";
import { ShoppingCart } from "@/pages/shopping-cart";
import { Checkout } from "@/pages/checkout";

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