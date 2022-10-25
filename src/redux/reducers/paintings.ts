import { createSlice } from "@reduxjs/toolkit";

export const paintings = createSlice({
  name: "paintings",
  initialState: {
        data: [],
        isLoading: false,
        isError: "",
  },
  reducers: {
    getPaintingsRequest:(state,action)=>{
        state.isLoading = true
    },
    getPaintingsSuccess:(state,action)=>{
        state.isLoading = false;
        state.data = action.payload;
    },
    getPaintingsFailure:(state,action)=>{
        state.isLoading = false;
        state.isError = action.payload
    }

  },
});

export default paintings.reducer;
export const {  getPaintingsRequest, getPaintingsSuccess, getPaintingsFailure,} =
paintings.actions;