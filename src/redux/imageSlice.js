import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
     loading: false,
     error: null,
     images: [],
};

export const getImages = createAsyncThunk('images/get', async () => {
     const response = await fetch('https://api.pexels.com/v1/curated?page=2&per_page=40', {
          headers: {
               Authorization: 'cClxXmOgGIBO0cgbOYo6R3EsZ5CwW7yqBE6wuOPRx0u8KqpHsYV8nnmM'
          }
     })
     const result = await response.json();
     console.log(result);
     return result;
})



const imageSlice = createSlice({
     name: 'images',
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder.addCase(getImages.pending, (state) => {
               state.loading = true;
          })

          builder.addCase(getImages.fulfilled, (state, action) => {
               state.loading =false;
               state.images = action.payload;
               state.error = "";
          })

          builder.addCase(getImages.rejected,(state,action)=>{
               state.loading= false;
               state.images = [];
               state.error = action.error.message;
          })
     }
})

export default imageSlice.reducer

