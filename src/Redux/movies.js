import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosFetch from '../Utils/Axios';
import {toast} from 'react-toastify';

let initialState = {
  moviePopular: [],
  movieTopRate: [],
  tvPopular: [],
  tvTopRate: [],
  isLoading: false,
};

let api_key = '154434997f5a23ef8aa4dd4eb1a8a774';

export let getPopularMovie = createAsyncThunk(
  'movie/popular',
  async (_, thunkAPI) => {
    try {
      let data = await axiosFetch.get(
        `movie/popular?api_key=${api_key}&page=1`
      );
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export let getPopularTV = createAsyncThunk(
  'tv/popular',
  async (_, thunkAPI) => {
    try {
      let data = await axiosFetch.get(`tv/popular?api_key=${api_key}`);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export let getTopRateMovie = createAsyncThunk(
  'movie/top-rate',
  async (_, thunkAPI) => {
    try {
      let data = await axiosFetch.get(`movie/top_rated?api_key=${api_key}`);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export let getTopRateTV = createAsyncThunk(
  'tv/top-rate',
  async (_, thunkAPI) => {
    try {
      let data = await axiosFetch.get(`tv/top_rated?api_key=${api_key}`);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

let movies = createSlice({
  name: 'movies',
  initialState,
  extraReducers: {
    [getPopularMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [getPopularMovie.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.moviePopular = payload.results;
    },
    [getPopularMovie.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getPopularTV.pending]: (state) => {
      state.isLoading = true;
    },
    [getPopularTV.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.tvPopular = payload.results;
    },
    [getPopularTV.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getTopRateMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [getTopRateMovie.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.tvTopRate = payload.results;
    },
    [getTopRateMovie.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getTopRateTV.pending]: (state) => {
      state.isLoading = true;
    },
    [getTopRateTV.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.movieTopRate = payload.results;
    },
    [getTopRateTV.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default movies.reducer;
