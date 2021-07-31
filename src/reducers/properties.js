import types from "../types";
import properties from "../properties.json";

const initialState = properties.properties;
export default (state = initialState, action) => {
  const { type, property = "" } = action;
  switch (type) {
    case types.ADD_COMPARE_PROPERTY: {
      const newState = [...state]; //[id];

      if (property) {
        const getIndex = newState.findIndex((item) => item === property);
        if (getIndex === -1) {
          newState.push(property);
        }
      }
      return newState;
      break;
    }
    case types.COMPARE_ALL_PROPERTY: {
      const { status } = action;

      if (status) {
        return initialState;
      } else {
        return [];
      }
      break;
    }
    case types.REMOVE_COMPARE_PROPERTY: {
      const newState = [...state];

      if (property) {
        const getIndex = newState.findIndex((item) => item === property);
        if (getIndex > -1) {
          newState.splice(getIndex, 1);
        }
      }
      return newState;
      break;
    }

    case types.SET_PRODUCT_COMPARE: {
      return state;
      break;
    }

    default:
      return state;
      break;
  }
};
