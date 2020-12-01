import {ActionType} from "../action";

const initialState = {};

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {offers: action.payload});
    default:
      return state;
  }
};

export default loadReducer;
