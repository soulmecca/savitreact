import { GET_IMAGES, LIKE_PHOTO, UNLIKE_PHOTO, CREATE_COMMENT } from "./types";
import imageAPI from "../../apis/image";
import { logout } from "./auth";

export const getFeed = token => async dispatch => {
   try {
      const response = await imageAPI(token).get();
      if (response.data) {
         dispatch({
            type: GET_IMAGES,
            payload: response.data
         });
      }
   } catch (err) {
      if (err.response && err.response.status === 401) {
         dispatch(logout());
      }
   }
};

export const likePhoto = pId => async (dispatch, getState) => {
   try {
      const {
         auth: { token }
      } = getState();

      dispatch({
         type: LIKE_PHOTO,
         payload: pId
      });

      await imageAPI(token).post(`/${pId}/likes/`);
   } catch (err) {
      if (err.response) {
         if (err.response.status === 401) {
            dispatch(logout());
         } else {
            dispatch(unlikePhoto(pId));
         }
      }
   }
};

export const unlikePhoto = pId => async (dispatch, getState) => {
   try {
      const {
         auth: { token }
      } = getState();

      dispatch({
         type: UNLIKE_PHOTO,
         payload: pId
      });

      await imageAPI(token).delete(`/${pId}/unlikes/`);
   } catch (err) {
      if (err.response) {
         if (err.response.status === 401) {
            dispatch(logout());
         } else {
            dispatch(likePhoto(pId));
         }
      }
   }
};

export const createComment = (pId, message) => async (dispatch, getState) => {
   const {
      auth: { token }
   } = getState();

   try {
      const response = await imageAPI(token).post(`/${pId}/comments/`, {
         message: message
      });

      dispatch({
         type: CREATE_COMMENT,
         payload: {
            pId: pId,
            comment: response.data
         }
      });
   } catch (err) {
      if (err.response) {
         if (err.response.statue === 401) {
            dispatch(logout());
         }
      }
   }
};
