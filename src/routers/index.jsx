import { Home } from "@/pages";
import { MainLayouts } from "../layouts/MainLayouts";
import { Page404 } from "@/pages/404";
import { PATH } from "@/config/path";
import { Product } from "@/pages/product";

export const routers = [
  {
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: PATH.product,
        element: <Product />,
      },

      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];