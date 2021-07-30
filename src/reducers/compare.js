import types from "../types";
export default (state = [], action) => {
  const { type, id } = action;
  switch (type) {
    case types.ADD_PRODUCT_COMPARE:
      const newState = [id];
      return [...state, ...newState];
      break;

    default:
      return state;
      break;
  }
};
