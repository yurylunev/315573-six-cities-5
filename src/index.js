import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import {reducer} from "./store/reducer";


const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const api = createAPI();

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
