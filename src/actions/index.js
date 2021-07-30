import types from "../types";

const setProduct = (payload) => {
  return {
    type: types.SET_PRODUCTS,
    payload,
  };
};

const addProductCompare = (id) => {
  return {
    type: types.ADD_PRODUCT_COMPARE,
    id,
  };
};

export default {
  setProduct,
  addProductCompare,
};
