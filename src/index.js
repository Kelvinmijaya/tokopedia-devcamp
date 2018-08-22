import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import store, { history } from "./store";
import RouteWrapper from "./routes";
import registerServiceWorker from "./registerServiceWorker";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <Router history={history}>
      <RouteWrapper />
    </Router>
  </Provider>,
  target
);
registerServiceWorker();
