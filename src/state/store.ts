import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { companyReducer } from "./company/slicer";

const reducer = combineReducers({ companyReducer });
const middleware = [...getDefaultMiddleware()];
const store = configureStore({ reducer, middleware });

export default store;
