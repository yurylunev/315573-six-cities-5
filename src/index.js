import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/action";
import {checkAuth, fetchOffers} from "./store/api-actions";
import {AuthorizationStatus} from "./const";

const api = createAPI(
    ()=>store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer, /* preloadedState, */
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
);

Promise.all([
  store.dispatch(fetchOffers()),
  store.dispatch(checkAuth())
]).then(() => {

  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById(`root`)
  );
});


