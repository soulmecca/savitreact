import { combineReducers } from "redux";
import { i18nState } from "redux-i18n";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import history from "../../history";
import photoReducer from "./photoReducer";

export default combineReducers({
   router: connectRouter(history),
   auth: authReducer,
   feed: photoReducer,
   form: formReducer,
   i18nState
});
