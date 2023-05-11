const PROFILE = "/profile";

export const PATH = {
  Home: "/",
  Product: "/product",
  ProductDetail: "/:slug",
  Category: "/:slug/:id",
  ShoppingCart: "/shopping-cart",
  Checkout: "/checkout",
  Profile: {
    index: PROFILE,
    Order: PROFILE + "/order",
    Wishlist: PROFILE + "/wishlist",
    Address: PROFILE + "/address",
    Payment: PROFILE + "/payment",
    // Info: PROFILE + "/info",

  },
  Account: "/account",
  ContactUs: "/contact-us",
  OrderCompleted: "/order-completed",
  Blog: "/blog",
  BlogPost: "/blog-post",
  Faq: "/faq",
  ShippingAndReturns: "/shipping-and-returns",
  Store_locator: "/store-locator",
  // Info: "/info",
  Wishlist: "/wishlist"

};
