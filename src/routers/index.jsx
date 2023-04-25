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
import { GuestRoute } from "@/components/GuestRoute";
import { OrderCompleted } from "@/pages/order-completed";
import { ContactUs } from "@/pages/contact-us";
import { Blog } from "@/pages/blog";
import { Blog_post } from "@/pages/blog-post";
import { Faq } from "@/pages/faq";
import { Shipping_and_returns } from "@/pages/shipping-and-returns";
import { Auth } from "@/pages/profile/auth";
import { Store_locator } from "../pages/store-locator";


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
        path: PATH.Blog,
        element: <Blog />,
      },

      {
        path: PATH.Blog_post,
        element: <Blog_post />,
      },
      {
        path: PATH.Auth,
        element: <Auth />,
      },

      {
        path: PATH.Faq,
        element: <Faq/>,
      },

      {
        path: PATH.Store_locator,
        element: <Store_locator/>,
      },

      {
        path: PATH.Shipping_and_returns,
        element: <Shipping_and_returns/>,
      },


      {
        path: PATH.ShoppingCart,
        element: <ShoppingCart />,
      },

      {
        element: <PrivateRoute redirect={PATH.Account} />,
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
        path: PATH.OrderCompleted,
        element: <OrderCompleted />,
      },

      {
        path: PATH.ContactUs,
        element: <ContactUs />,
      },

      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];
