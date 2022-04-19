import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  countItems: 0
}

const reducerCart = createSlice({
  name: 'reducerCart',
  initialState: initialState,
  reducers: {
    cartAddItem(state, action) {
      const { id, size, count } = action.payload;
      const exist = state.items.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (exist === -1) {
        state.items.push(action.payload)
        state.countItems += 1;
      } else {
        state.items[exist].count += count
      }
    },

    cartReset(state, action) {
      return initialState;
    },

    cartDeleteItem(state, action) {
      state.items.splice(action.payload, 1);
      state.countItems -= 1;
    },

  }
})

export const { cartAddItem, cartReset, cartDeleteItem } = reducerCart.actions;
export default reducerCart.reducer;