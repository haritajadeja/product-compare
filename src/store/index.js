import { createStore, combineReducers } from "redux";

import products from "../reducers/products";
import compare from "../reducers/compare";

const reducers = combineReducers({
  products,
  compare,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
