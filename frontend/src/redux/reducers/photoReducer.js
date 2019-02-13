import { GET_IMAGES } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case GET_IMAGES:
         const posts = action.payload;
         return { ...state, posts };
      default:
         return state;
   }
};
