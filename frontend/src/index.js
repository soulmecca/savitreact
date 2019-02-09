import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import "index.css";
import App from "App";
import reducers from "redux/reducers";

const middlewares = [reduxThunk];
const env = process.env.NODE_ENV;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (env === "development") {
	const { logger } = require("redux-logger");
	middlewares.push(logger);
}

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(...middlewares))
);

setTimeout(() => {
	store.dispatch({ type: "hahaha" });
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
