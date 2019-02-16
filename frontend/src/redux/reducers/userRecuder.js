import {
   FETCH_USER_LIST,
   FOLLOWING_USER,
   FETCH_IMAGES
} from "../../redux/actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case FETCH_USER_LIST:
         return { ...state, users: action.payload };
      case FOLLOWING_USER:
         return applyFollowingUser(state, action);
      case FETCH_IMAGES:
         const posts = action.payload;
         return { ...state, posts };
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
   return { ...state, users: updatedList };
}
