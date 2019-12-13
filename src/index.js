import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

//Component & CSS
import "./css/_index.scss";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
