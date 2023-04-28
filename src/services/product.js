import { PRODUCT_API } from '@/config/api'
import {http} from '@/utils'

export const productService = {
    getProduct(query = '') {
        return http.get(`${PRODUCT_API}${query}`)
    },

    getCategories(query = '') {
        return http.get(`${PRODUCT_API}/categories`)
    },

    getWishlist(query = '') {
        return http.get('$(PRODUCT_API)/wishlist$(query)')
    },

    addWishlist(query = '') {
        return http.post('$(PRODUCT_API)/wishlist$(productID)')
    },

    removeWishlist(productID) {
        return http.delete('$(PRODUCT_API)/wishlist$(productID)')
    }
}