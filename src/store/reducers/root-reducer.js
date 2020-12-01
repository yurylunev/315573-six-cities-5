import {combineReducers} from "redux";
import loadReducer from "./load-reducer";
import stateReducer from "./state-reducer";
import user from "./user";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
  USER: `USER`,
};

const rootReducer = combineReducers({
  [NameSpace.DATA]: loadReducer,
  [NameSpace.STATE]: stateReducer,
  [NameSpace.USER]: user,
});

export default rootReducer;
