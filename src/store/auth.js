import { authService } from "@/services/auth";
import { userService } from "@/services/user";
import {
  clearToken,
  clearUser,
  getToken,
  getUser,
  setToken,
  setUser,
} from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cartActions, getCartAction } from "./cart";
import { takeLatest } from "redux-saga/effects";
import { PATH } from "@/config/path";

const initialState = {
  user: getUser(),
  status: "idle",
  loginLoading: false,
};

export const loginAction = createAsyncThunk(
  "auth/login",
  async (data, thunkApi) => {
    try {
      // console.log(data)
      const res = await authService.login(data);
      setToken(res.data);
      const user = await userService.getUser();
      setUser(user.data);

      thunkApi.dispatch(getCartAction());
      return user.data;
    } catch (err) {
      console.log(err);
      throw err.response.data;
    }
  }
);

export const loginByCodeAction = createAsyncThunk(
  "auth/loginByCodeAction",
  async (code, thunkApi) => {
    try {
      // console.log(data)
      const res = await authService.loginByCode({ code });
      setToken(res.data);
      const user = await userService.getUser();
      setUser(user.data);

      return user.data;
    } catch (err) {
      console.log(err);
      throw err.response.data;
    }
  }
);

export const logoutAction = createAsyncThunk("auth/logout", (_, thunkApi) => {
  thunkApi.dispatch(authActions.logout());
  thunkApi.dispatch(cartActions.setCart(null));
  clearUser();
  clearToken();
  window.location.href = PATH.Account

});

export const getUserAction = createAsyncThunk(
  "auth/getUser",
  async (_, thunkApi) => {
    try {
      if (getToken()) {
        const user = await userService.getUser();
        setUser(user.data);
        thunkApi.dispatch(authActions.setUser(user.data));
      }
    } catch (err) {}
  }
);

export const setUserAction = createAsyncThunk(
  "auth/setUser",
  (user, thunkApi) => {
    setUser(user);
    thunkApi.dispatch(authActions.setUser(user));
  }
);

export const { reducer: authReducer, actions: authActions } = createSlice({
  initialState,
  name: "auth",
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.loginLoading = true;
    });

    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loginLoading = false;
    });

    builder.addCase(loginAction.rejected, (state) => {
      state.loginLoading = false;
    });

    builder.addCase(loginByCodeAction.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export function* authSaga() {
  yield takeLatest(loginAction.fulfilled, function* () {});
}
