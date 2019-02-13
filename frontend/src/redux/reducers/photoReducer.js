import { GET_IMAGES } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case GET_IMAGES:
         // return applySetToken(state, action);
         return state;
      default:
         return state;
   }
};
