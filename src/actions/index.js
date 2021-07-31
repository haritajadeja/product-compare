import types from "../types";

const setProduct = (payload) => {
  return {
    type: types.SET_PRODUCTS,
    payload,
  };
};

const addProductCompare = (id = "") => {
  return {
    type: types.ADD_PRODUCT_COMPARE,
    id,
  };
};

const removeProductCompare = (id = "") => {
  return {
    type: types.REMOVE_PRODUCT_COMPARE,
    id,
  };
};

const setProductCompare = () => {
  return {
    type: types.SET_PRODUCT_COMPARE,
  };
};

const addProperty = (property = "") => {
  return {
    type: types.ADD_COMPARE_PROPERTY,
    property,
  };
};

const removeProperty = (property = "") => {
  return {
    type: types.REMOVE_COMPARE_PROPERTY,
    property,
  };
};

export default {
  setProduct,
  addProductCompare,
  removeProductCompare,
  setProductCompare,
  addProperty,
  removeProperty,
};
