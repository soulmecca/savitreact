import { FETCH_USER_LIST, FOLLOWING_USER } from "../../redux/actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case FETCH_USER_LIST:
         const list = action.payload;
         return { ...state, users: list };
      case FOLLOWING_USER:
         return applyFollowingUser(state, action);
      default:
         return state;
   }
};

function applyFollowingUser(state, action) {
   const uid = action.payload;
   const users = state.users;

   const updatedList = users.map(user => {
      if (user.id === uid) {
         return { ...user, following: !user.following };
      }
      return user;
   });
   console.log({ ...state, users: updatedList });
   return { ...state, users: updatedList };
}
