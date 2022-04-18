import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const reducerCart = createSlice({
  name: 'reducerCart',
  initialState: initialState,
  reducers: {
    cartUpdate(state, action) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    cartReset(state, action) {
      return initialState;
    }
  }
})

export const { cartUpdate, cartReset } = reducerCart.actions;
export default reducerCart.reducer;