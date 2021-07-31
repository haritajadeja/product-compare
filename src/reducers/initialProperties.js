import types from "../types";
import properties from "../properties.json";

const initialState = properties.properties;
export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
      break;
  }
};
