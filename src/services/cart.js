export const cartService = {
    addItem(productId, quantity) {
        return http.patch(`${CART_API}/${productId}`, { quantity })
    },

    getCart() {
        return http.get(`${CART_API}`)
    }
}