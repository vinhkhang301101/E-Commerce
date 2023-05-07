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
    // Wishlist: PROFILE + "/wishlist",
    Address: PROFILE + "/address",
    Payment: PROFILE + "/payment",
    // Info: PROFILE + "/info",

  },
  Account: "/account",
  ContactUs: "/contact-us",
  OrderCompleted: "/order-completed",
  Blog: "/blog",
  Blog_post: "/blog-post",
  Faq: "/faq",
  Shipping_and_returns: "/shipping-and-returns",
  Store_locator: "/store-locator",
  Info: "/info",
  Wishlist: "/wishlist"

};
