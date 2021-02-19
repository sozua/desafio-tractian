import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { companyReducer as company } from "./company/slicer";

const reducer = combineReducers({ company });
const middleware = [...getDefaultMiddleware()];
const store = configureStore({ reducer, middleware });

export type StoreTypes = ReturnType<typeof reducer>;
export default store;
