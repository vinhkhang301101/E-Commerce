const PROFILE = '/account'

export const PATH = {
    Home: '/',
    Product: '/product',
    ProductDetail: '/:slug',
    Category: '/:slug/:id',
    ShoppingCart: '/shopping-cart',
    Checkout: '/checkout',
    Profile: {
        index: PROFILE,
        Order: PROFILE + '/order',
        Wishlist: PROFILE + '/wishlist',
        Address: PROFILE + '/address',
        Payment: PROFILE + '/payment',
    },
    Account: '/account',
    OrderCompleted: '/order-completed'
}