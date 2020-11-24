import {ActionType} from "./action";
import cities from "../mocks/cities";
import offers from "../mocks/offers";

const initialState = {
  cities,
  currentCity: cities[3],
  offers,
  activeCard: {},
  sortingType: `popular`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case ActionType.SET_ACTIVE_CARD:
      return Object.assign({}, state, {activeCard: action.payload});
    case ActionType.CHANGE_SORTING_TYPE:
      return Object.assign({}, state, {
        offers: Object.assign([], state.offers).sort(sortByType(action.payload)),
        sortingType: action.payload
      });
  }
  return state;
};

const sortByType = (currentSortType) => (a, b) => {
  switch (currentSortType) {
    case `popular`:
      return sortWrapper(a.popularity, b.popularity);
    case `low_to_high`:
      return sortWrapper(a.price.value, b.price.value);
    case `high_to_low`:
      return sortWrapper(b.price.value, a.price.value);
    case `top_rated`:
      return sortWrapper(b.ratingStars, a.ratingStars);
  }
  return 0;
};

const sortWrapper = (a, b) => ((a < b) ? -1 : +(a > b));


export {reducer};
