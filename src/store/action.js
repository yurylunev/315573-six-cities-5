export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  INIT_STATE: `INIT_STATE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOGIN_USER: `LOGIN_USER`,
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const changeActiveCard = (activeCard) => ({
  type: ActionType.SET_ACTIVE_CARD,
  payload: activeCard
});

export const onSortingTypeChange = (sortingType) => ({
  type: ActionType.CHANGE_SORTING_TYPE,
  payload: sortingType
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers.data,
});

export const initState = (state) => ({
  type: ActionType.INIT_STATE,
  payload: state.data,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loginUser = (userName) => ({
  type: ActionType.LOGIN_USER,
  payload: userName,
});
