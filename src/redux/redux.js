import data from "../assets/data";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// createSlice 생성 (액션 타입, 액션 생성자, 리듀서)

// menuSlice 생성하기
export const menuSlice = createSlice({
  name: "menu",
  initialState: data.menu,
  reducers: {},
});

// cartSlice 생성하기
export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      return [...state, action.payload];
    },
    removeFromCart(state, action) {
      return state.filter((el) => action.payload !== el.id);
      //state.filter((el) => action.payload.id !== el.id); 인 경우에는 Cart.jsx에서 객체 수정
    },
  },
});

// configureStore를 사용하여 store 생성하기
export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
  },
});