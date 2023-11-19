import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const ReducerFilter = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;

///Selectors///

export const getFilter = state => state.filter.value;
