import {http} from '@/utils'

export const productService = {
    getProduct(query = '') {
        return http.get(`${PRODUCT_API}${query}`)
    }
}