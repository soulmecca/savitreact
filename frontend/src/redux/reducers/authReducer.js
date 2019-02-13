import { SAVE_TOKEN, LOGOUT } from "../actions/types";

const INITIAL_STATE = {
   isLoggedIn: localStorage.getItem("jwt") ? true : false,
   token: localStorage.getItem("jwt")
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case SAVE_TOKEN:
         return applySetToken(state, action);
      case LOGOUT:
         return applyLogout(state, action);
      default:
         return state;
   }
};

function applySetToken(state, action) {
   const token = action.payload;
   localStorage.setItem("jwt", token);
   return {
      ...state,
      isLoggedIn: true,
      token: token
   };
}

function applyLogout(state, action) {
   localStorage.removeItem("jwt");
   return {
      isLoggedIn: false
   };
}
