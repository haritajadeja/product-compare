import types from "../types";

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_PRODUCTS:
      const products = payload["products"];
      return [...state, ...products];
      break;

    default:
      return state;
      break;
  }
};
