import { SAVE_TOKEN } from "../actions/types";

const INITIAL_STATE = {
   isLoggedIn: localStorage.getItem("jwt") ? true : false,
   token: localStorage.getItem("jwt")
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case SAVE_TOKEN:
         return applySetToken(state, action);
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
