export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  LOAD_OFFERS: `LOAD_OFFERS`
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
  payload: offers
});

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
        .then(({data}) => dispatch(loadOffers(data)))
);
