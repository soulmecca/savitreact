import { SAVE_TOKEN, LOGOUT } from "../actions/types";

const INITIAL_STATE = {
   isLoggedIn: localStorage.getItem("jwt") ? true : false,
   token: localStorage.getItem("jwt"),
   uid: localStorage.getItem("uid")
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
   const {
      payload: { token, user }
   } = action;

   localStorage.setItem("jwt", token);
   localStorage.setItem("uid", user.pk);
   return {
      ...state,
      isLoggedIn: true,
      token: token,
      uid: user.pk
   };
}

function applyLogout(state, action) {
   localStorage.removeItem("jwt");
   localStorage.setItem("uid");
   return {
      isLoggedIn: false
   };
}
