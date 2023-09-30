import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filterValue',
  initialState: '',
  reducers: {
    change: action => {
      console.log('Changing filter value to:', action.payload);
      return action.payload;
    },
  },
});

export const { change } = filterSlice.actions;
