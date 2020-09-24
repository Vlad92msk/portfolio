import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//--------------------------------------------------------------
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducers } from "./store/Reducers/rootReducers";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux/";
import thunk from "redux-thunk";
//--------------------------------------------------------------

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
