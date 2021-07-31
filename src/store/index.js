import { createStore, combineReducers } from "redux";

import products from "../reducers/products";
import compare from "../reducers/compare";
import properties from "../reducers/properties";
import initialProperties from "../reducers/initialProperties";

const reducers = combineReducers({
  products,
  compare,
  properties,
  initialProperties,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
