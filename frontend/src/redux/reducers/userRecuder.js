import { FETCH_USER_LIST } from "../../redux/actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case FETCH_USER_LIST:
         const list = action.payload;
         return { ...state, list };
      default:
         return state;
   }
};
