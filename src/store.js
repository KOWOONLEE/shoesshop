import { configureStore, createSlice } from "@reduxjs/toolkit";

const shopUser = createSlice({
  //state 이름
  name: "user",
  //key
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeUser(state) {
      return { name: "park", age: 20 };
      // state.name = 'park' 직접 수정 가능
    },
    changeAge(state) {
      state.age += 1;
    },
    //파라미터 문법 사용하기
    // changeAge(state, action) { //state변경함수를 action이라고 함
    //   state.age += action.payload;
    // },
  },
});
// changeAge(10)
// changeAge(100)
const shopCart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    // changeCount(state, action) {
    //   state[action.payload].count++;
    // },
    changeCount(state, action) {
      const shopId = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[shopId].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { changeUser, changeAge } = shopUser.actions;
export let { changeCount, addItem } = shopCart.actions;

export default configureStore({
  //위에 등록한거 가져와야함.
  reducer: {
    shopUser: shopUser.reducer,
    shopCart: shopCart.reducer,
  },
});
