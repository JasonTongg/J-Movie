import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosFetch from '../Utils/Axios';
import {toast} from 'react-toastify';

let initialState = {
  moviePopular: {data: [], isLoading: false},
  movieUpComing: {data: [], isLoading: false},
  movieTopRate: {data: [], isLoading: false},
  tvPopular: {data: [], isLoading: false},
  tvTopRate: {data: [], isLoading: false},
  discover: {data: [], isLoading: false},
  details: {data: {}, isLoading: false},
  detailsSimilar: {data: [], isLoading: false},
  detailsVideo: {data: [], isLoading: false},
  detailsCredit: {data: [], isLoading: false},
  discoverVar: {},
  isLoading: false,
};

let api_key = '154434997f5a23ef8aa4dd4eb1a8a774';

export let detailMovie = createAsyncThunk(
  'movie/detail',
  async ({id, type}, thunkAPI) => {
    try {
      let data = await axiosFetch.get(
        `${type}/${id}?api_key=${api_key}&page=1`
      );
      thunkAPI.dispatch(credits({id: data.data.id, type}));
      thunkAPI.dispatch(video({id: data.data.id, type}));
      thunkAPI.dispatch(similar({id: data.data.id, type}));
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export let discoverMovie = createAsyncThunk(
  'movie/discover',
  async (_, thunkAPI) => {
    try {
      let {page, type} = thunkAPI.getState().movie.discoverVar;
      let data = await axiosFetch.get(
        `https://api.themoviedb.org/3/discover/${type}?api_key=${api_key}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      );
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export let credits = createAsyncThunk(
  'credits',
  async ({id, type}, thunkAPI) => {
    try {
      let data = await axiosFetch.get(
        `${type}/${id}/credits?api_key=${api_key}&page=1`
      );
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export let similar = createAsyncThunk(
  'similar',
  async ({id, type}, thunkAPI) => {
    try {
      let data = await axiosFetch.get(
        `${type}/${id}/similar?api_key=${api_key}&page=1`
      );
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export let video = createAsyncThunk('video', async ({id, type}, thunkAPI) => {
  try {
    let data = await axiosFetch.get(
      `${type}/${id}/videos?api_key=${api_key}&language=en-US`
    );
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

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

export let getUpComingMovie = createAsyncThunk(
  'movie/upcoming',
  async (_, thunkAPI) => {
    try {
      let data = await axiosFetch.get(
        `movie/upcoming?api_key=${api_key}&page=1`
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
  reducers: {
    discoverVariable: (state, {payload}) => {
      state.discoverVar = payload;
    },
  },
  extraReducers: {
    [getPopularMovie.pending]: (state) => {
      state.moviePopular.isLoading = true;
    },
    [getPopularMovie.fulfilled]: (state, {payload}) => {
      state.moviePopular.isLoading = false;
      state.moviePopular.data = payload.results;
    },
    [getPopularMovie.rejected]: (state, {payload}) => {
      state.moviePopular.isLoading = false;
      toast.error(payload);
    },
    [credits.pending]: (state) => {
      state.detailsCredit.isLoading = true;
    },
    [credits.fulfilled]: (state, {payload}) => {
      state.detailsCredit.isLoading = false;
      state.detailsCredit.data = payload.cast;
    },
    [credits.rejected]: (state, {payload}) => {
      state.detailsCredit.isLoading = false;
      toast.error(payload);
    },
    [similar.pending]: (state) => {
      state.detailsSimilar.isLoading = true;
    },
    [similar.fulfilled]: (state, {payload}) => {
      state.detailsSimilar.isLoading = false;
      state.detailsSimilar.data = payload.results;
    },
    [similar.rejected]: (state, {payload}) => {
      state.detailsSimilar.isLoading = false;
      toast.error(payload);
    },
    [video.pending]: (state) => {
      state.detailsVideo.isLoading = true;
    },
    [video.fulfilled]: (state, {payload}) => {
      state.detailsVideo.isLoading = false;
      state.detailsVideo.data = payload.results;
    },
    [video.rejected]: (state, {payload}) => {
      state.detailsVideo.isLoading = false;
      toast.error(payload);
    },
    [getUpComingMovie.pending]: (state) => {
      state.movieUpComing.isLoading = true;
    },
    [getUpComingMovie.fulfilled]: (state, {payload}) => {
      state.movieUpComing.isLoading = false;
      state.movieUpComing.data = payload.results;
    },
    [getUpComingMovie.rejected]: (state, {payload}) => {
      state.movieUpComing.isLoading = false;
      toast.error(payload);
    },
    [getPopularTV.pending]: (state) => {
      state.tvPopular.isLoading = true;
    },
    [getPopularTV.fulfilled]: (state, {payload}) => {
      state.tvPopular.isLoading = false;
      state.tvPopular.data = payload.results;
    },
    [getPopularTV.rejected]: (state, {payload}) => {
      state.tvPopular.isLoading = false;
      toast.error(payload);
    },
    [getTopRateMovie.pending]: (state) => {
      state.tvTopRate.isLoading = true;
    },
    [getTopRateMovie.fulfilled]: (state, {payload}) => {
      state.tvTopRate.isLoading = false;
      state.tvTopRate.data = payload.results;
    },
    [getTopRateMovie.rejected]: (state, {payload}) => {
      state.tvTopRate.isLoading = false;
      toast.error(payload);
    },
    [getTopRateTV.pending]: (state) => {
      state.movieTopRate.isLoading = true;
    },
    [getTopRateTV.fulfilled]: (state, {payload}) => {
      state.movieTopRate.isLoading = false;
      state.movieTopRate.data = payload.results;
    },
    [getTopRateTV.rejected]: (state, {payload}) => {
      state.movieTopRate.isLoading = false;
      toast.error(payload);
    },
    [discoverMovie.pending]: (state) => {
      state.discover.isLoading = true;
    },
    [discoverMovie.fulfilled]: (state, {payload}) => {
      state.discover.isLoading = false;

      if (state.discoverVar.page === 1) {
        state.discover.data = payload.results;
      } else {
        state.discover.data = [...state.discover.data, ...payload.results];
      }
    },
    [discoverMovie.rejected]: (state, {payload}) => {
      state.discover.isLoading = false;
      toast.error(payload);
    },
    [detailMovie.pending]: (state) => {
      state.details.isLoading = true;
    },
    [detailMovie.fulfilled]: (state, {payload}) => {
      state.details.isLoading = false;
      state.details.data = payload;
    },
    [detailMovie.rejected]: (state, {payload}) => {
      state.details.isLoading = false;
      toast.error(payload);
    },
  },
});

export let {discoverVariable} = movies.actions;
export default movies.reducer;
