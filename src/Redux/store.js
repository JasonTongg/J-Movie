import {configureStore} from '@reduxjs/toolkit';
import movie from './movies';
import user from './user';

let store = configureStore({
  reducer: {
    movie,
    user,
  },
});

export default store;
