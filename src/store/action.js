export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeActiveCard: (activeCard) => ({
    type: ActionType.SET_ACTIVE_CARD,
    payload: activeCard
  }),
  onSortingTypeChange: (sortingType) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: sortingType
  })
};
