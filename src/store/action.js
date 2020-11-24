export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeActiveCard: (activeCard) => ({
    type: ActionType.SET_ACTIVE_CARD,
    payload: activeCard
  })
};
