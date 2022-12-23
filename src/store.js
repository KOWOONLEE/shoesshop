import { configureStore, createSlice } from "@reduxjs/toolkit";

const shopUser = createSlice({
  //state 이름
  name: "user",
  //key
  initialState: "kim",
});

const shopCart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  //위에 등록한거 가져와야함.

  reducer: {
    shopUser: shopUser.reducer,
    shopCart: shopCart.reducer,
  },
});
