import types from "../types";
import * as compareUtil from "../utils/compare";

export default (state = [], action) => {
  const { type, id } = action;
  switch (type) {
    case types.ADD_PRODUCT_COMPARE: {
      const newState = [...state]; //[id];

      if (id) {
        const getIndex = newState.findIndex((item) => item === id);
        if (getIndex === -1) {
          newState.push(id);
        }

        compareUtil.setCompareList(newState);
      }
      return newState;
      break;
    }

    case types.REMOVE_PRODUCT_COMPARE: {
      const newState = [...state];

      if (id) {
        const getIndex = newState.findIndex((item) => item === id);
        if (getIndex > -1) {
          newState.splice(getIndex, 1);
        }
        compareUtil.setCompareList(newState);
      }
      return newState;
      break;
    }

    case types.SET_PRODUCT_COMPARE: {
      const compareList = compareUtil.getCompareList();

      return [...state, ...compareList];
      break;
    }

    default:
      return state;
      break;
  }
};
