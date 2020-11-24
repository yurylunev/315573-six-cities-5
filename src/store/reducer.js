import {ActionType} from "./action";
import cities from "../mocks/cities";
import offers from "../mocks/offers";

const initialState = {
  cities,
  currentCity: cities[3],
  offers,
  activeCard: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case ActionType.SET_ACTIVE_CARD:
      return Object.assign({}, state, {activeCard: action.payload});
  }
  return state;
};


export {reducer};
