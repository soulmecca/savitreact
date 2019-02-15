import image from "../../apis/image";
import { logout } from "./auth";
import { FETCH_USER_LIST } from "./types";

export const fetchUserList = pId => async (dispatch, getState) => {
   try {
      const {
         auth: { token }
      } = getState();

      const response = await image(token).get(`/${pId}/likes/`);
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
