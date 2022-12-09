import {configureStore} from '@reduxjs/toolkit';
import movie from './movies';

let store = configureStore({
  reducer: {
    movie,
  },
});

export default store;
