import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import reduxThunk from "redux-thunk";
import I18n from "redux-i18n";
import history from "./history";
import App from "components/App";
import reducers from "redux/reducers";

import { translations } from "translations";

const middlewares = [reduxThunk, routerMiddleware(history)];
const env = process.env.NODE_ENV;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// if (env === "development") {
// 	const { logger } = require("redux-logger");
// 	middlewares.push(logger);
// }

const store = createStore(
   reducers,
   composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
   <Provider store={store}>
      <I18n translations={translations} initialLang="en" fallbackLang="en">
         <ConnectedRouter history={history}>
            <App />
         </ConnectedRouter>
      </I18n>
   </Provider>,
   document.getElementById("root")
);
