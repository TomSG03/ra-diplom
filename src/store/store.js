import { configureStore } from '@reduxjs/toolkit';
import reducerTopList from '../reducers/reducerTopList';
import reducerCatalog from '../reducers/reducerCatalog';
import reducerHeadSearch from '../reducers/reducerHeadSearch';
import reducerCatalogSearch from '../reducers/reducerCatalogSearch'
// import { applyMiddleware, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";


const store = configureStore({
  reducer: {
    reducerTopList,
    reducerCatalog,
    reducerHeadSearch,
    reducerCatalogSearch
  }
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
