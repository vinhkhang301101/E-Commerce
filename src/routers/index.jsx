import { Home } from "@/pages";
import { MainLayouts } from "../layouts/MainLayouts";
import { Page404 } from "@/pages/404";

export const routers = [
  {
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];