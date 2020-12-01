import {ActionType} from "../action";
import {AuthorizationStatus} from "../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userName: ``
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
  }
  return state;
};

export default user;
