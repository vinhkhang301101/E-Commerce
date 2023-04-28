import { cartService } from "@/services/cart";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addCartItemAction = createAsyncThunk('cart/addCartItem', async (data, thunkAPI) => {
    try {
        await cartService.addItem(data.productId, data.quantity)
        const cart = cartService.getCart()
        thunkAPI.dispatch(cartActions.setCart(cart.data))
    } catch(err) {
        throw err.response.data
    }
})

export const { reducer: cartReducer, actions: cartActions } = createSlice({
    name: 'cart',
    initialState: {
        cart: null,
    },
    reducers: {
        setCart(state, action) {
            state.cart = action.payload
        }
    }
})