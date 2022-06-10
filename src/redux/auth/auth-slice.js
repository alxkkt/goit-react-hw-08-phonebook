import { createSlice } from '@reduxjs/toolkit';

import { signup, login, getCurrentUser, logout } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogged: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [signup.fulfilled]: (store, { payload }) => ({
      ...store,
      isLogged: true,
      loading: false,
      ...payload,
    }),
    [signup.rejected]: (store, { payload }) => ({ ...store, error: payload }),
    [login.pending]: (store, _) => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogged = true;
      store.token = payload.token;
      store.user = payload.user;
    },
    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [getCurrentUser.pending]: (store, _) => {
      store.loading = true;
      store.error = null;
    },
    [getCurrentUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogged = true;
      store.user = payload.user;
    },
    [getCurrentUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.token = '';
    },
    [logout.pending]: (store, _) => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: (store, _) => {
      store.loading = false;
      store.isLogged = false;
      store.token = '';
      store.user = {};
    },
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
