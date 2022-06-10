import { createAsyncThunk } from '@reduxjs/toolkit';

import * as services from '../../shared/services/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const user = await services.signup(data);
      console.log(user);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const user = await services.login(data);

      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrent',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { token } = auth;

      const user = await services.getCurrent(token);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const user = await services.logout();

      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
