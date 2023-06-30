import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './imageSlice';
import favouriteReducer from './favouritesSlice'

export const store = configureStore({
     reducer: {
          images: imageReducer,
          favourites : favouriteReducer
     }
})