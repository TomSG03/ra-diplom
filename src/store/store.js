import { configureStore } from '@reduxjs/toolkit';
import reducerItem from '../reducers/reducerItem';
import reducerCart from '../reducers/reducerCart';
import reducerTopList from '../reducers/reducerTopList';
import reducerCatalog from '../reducers/reducerCatalog';
import reducerHeadSearch from '../reducers/reducerHeadSearch';
import reducerCatalogSearch from '../reducers/reducerCatalogSearch';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "./localStorage";
// import { applyMiddleware, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";


const store = configureStore({
  reducer: {
    reducerTopList,
    reducerCatalog,
    reducerHeadSearch,
    reducerCatalogSearch,
    reducerItem, 
    reducerCart
  },
  preloadedState: { reducerCart: loadFromLocalStorage("reducerCart") },
});

store.subscribe(() => {
  saveToLocalStorage("reducerCart", store.getState().reducerCart);
});


export default store;

// const rootReducer = combineReducers({
//   reducerTopList,
// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [thunk]
// })

// const reducer = ({
//     reducerTopList
//   });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = configureStore(reducer, composeEnhancers(applyMiddleware(thunk)));
