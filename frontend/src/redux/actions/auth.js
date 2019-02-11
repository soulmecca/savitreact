import {
   SAVE_TOKEN,
   LOGOUT,
   SET_IMAGE_LIST,
   SET_USER_LIST,
   FOLLOW_USER,
   UNFOLLOW_USER
} from "./types";

import loginApi from "../../apis/login";

// API actions

export const usernameLogin = (username, password) => {
   console.log("@@@@ ", username, password);
   return async dispatch => {
      const response = await loginApi.post("/login", { username, password });
      console.log("@@@@@ response is ", response);
      // if (response.token) {
      //    dispatch({
      //       type: SAVE_TOKEN,
      //       payload: response.token
      //    });
      // }
   };
};
