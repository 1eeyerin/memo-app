import { configureStore } from '@reduxjs/toolkit';
import memoSlice from './slices/memoSlice';

const store = configureStore({
  reducer: {
    memo: memoSlice,
  },
});

export default store;
