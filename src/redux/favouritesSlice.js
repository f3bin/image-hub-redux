import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favouritesSlice = createSlice({
name:"favourites",
initialState,
reducers:{
     like(state,action){
          state.push(action.payload)
     }    ,
     dislike(state,action){
         return state.filter(item => item.id !== action.payload)
    
     }
}
})

export default favouritesSlice.reducer;
export const {like,dislike} =favouritesSlice.actions;