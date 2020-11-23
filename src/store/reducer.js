import {ActionType} from "./action";
import cities from "../mocks/cities";
import offers from "../mocks/offers";

const initialState = {
  cities,
  currentCity: cities[0],
  offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case ActionType.GET_CITY_OFFERS:
      return Object.assign({}, state, {offers: action.payload});
  }
  return state;
};


export {reducer};
