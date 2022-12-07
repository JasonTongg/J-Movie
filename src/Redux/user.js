import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getToken} from '../Utils/LocalStorage';
import {toast} from 'react-toastify';

let initialState = {
  session_id: '',
  token: '',
};

let api_key = '154434997f5a23ef8aa4dd4eb1a8a774';

export const requestSession = createAsyncThunk(
  'request session',
  async (_, thunkAPI) => {
    try {
      let data = await window.fetch(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${api_key}`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            username: 'jason',
            password: 'test123',
            request_token: getToken(),
          }),
        }
      );
      data = await data.json();
      return data.access_id;
    } catch (error) {
      return thunkAPI.rejectWithValue('Login User Error');
    }
  }
);

let user = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [requestSession.fulfilled]: (state, {payload}) => {
      state.session_id = payload;
    },
    [requestSession.rejected]: (_, {payload}) => {
      toast.error(payload);
    },
  },
});

export default user.reducer;
