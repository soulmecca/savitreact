import { combineReducers } from "redux";
import { i18nState } from "redux-i18n";
import { connectRouter } from "connected-react-router";
import authReducer from "./authReducer";
import history from "../../history";

export default combineReducers({
	router: connectRouter(history),
	auth: authReducer,
	i18nState
});
