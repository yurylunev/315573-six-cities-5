import {loadOffers, requireAuthorization} from "./action";

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
        .then((offers) => dispatch(loadOffers(offers)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
        .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
        .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
        .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);
