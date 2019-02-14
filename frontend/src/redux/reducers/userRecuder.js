import { FETCH_USER_LIST } from "../../redux/actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case FETCH_USER_LIST:
         const userList = action.payload;
         return { ...state, userList };
      default:
         return state;
   }
};
