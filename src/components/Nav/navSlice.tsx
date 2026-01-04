import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    navTabVal:()=>{
      let state = location.pathname === '/' ? 'home': location.pathname.replaceAll('/','');
      return state
    },
  },
  reducers: {
    changeNavTabVal(state, action) {
      state.navTabVal = action.payload.navTabVal;
    },
  },
});

export const { changeNavTabVal } = navSlice.actions;
export default navSlice.reducer;