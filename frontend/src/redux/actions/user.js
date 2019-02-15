import imageAPI from "../../apis/image";
import userAPI from "../../apis/user";
import { logout } from "./auth";
import { FETCH_USER_LIST, FOLLOWING_USER } from "./types";

const setFollowingUser = uid => {
   return {
      type: FOLLOWING_USER,
      payload: uid
   };
};

export const fetchUserList = pId => async (dispatch, getState) => {
   try {
      const {
         auth: { token }
      } = getState();

      const response = await imageAPI(token).get(`/${pId}/likes/`);
      dispatch({
         type: FETCH_USER_LIST,
         payload: response.data
      });
   } catch (err) {
      if (err.response) {
         if (err.response.status === 401) {
            dispatch(logout());
         }
      }
   }
};

export const followingUser = user => async (dispatch, getState) => {
   const follow = user.following ? "unfollow" : "follow";
   const uid = user.id;
   const {
      auth: { token }
   } = getState();

   try {
      dispatch(setFollowingUser(uid));
      if (user.following) {
         await userAPI(token).delete(`/${uid}/${follow}/`);
      } else {
         await userAPI(token).post(`/${uid}/${follow}/`);
      }
   } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 401) {
         dispatch(logout());
      } else {
         dispatch(setFollowingUser(uid));
      }
   }
};
