import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const reducerCatalog = createSlice({
  name: 'reducerCatalog',
  initialState: initialState,
  reducers: {
    catalogRequest(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    catalogRequestSusccess(state, action) {
      const items = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    },

    catalogRequestFailure(state, action) {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    }
  }
})

export const { catalogRequest, catalogRequestSusccess, catalogRequestFailure } = reducerCatalog.actions;
export default reducerCatalog.reducer;