import {
   SAVE_TOKEN,
   LOGOUT,
   SET_IMAGE_LIST,
   SET_USER_LIST,
   FOLLOW_USER,
   UNFOLLOW_USER
} from "./types";

import { idLogin, socialLogin } from "../../apis/login";

// API actions

export const facebookLogin = access_token => async dispatch => {
   const response = await socialLogin.post("/facebook/", {
      access_token: access_token
   });

   const token = response.data.token;
   if (token) {
      dispatch({
         type: SAVE_TOKEN,
         payload: token
      });
   }
};

export const usernameLogin = (username, password) => async dispatch => {
   try {
      const response = await idLogin.post("/login/", { username, password });
      const token = response.data.token;

      if (token) {
         dispatch({
            type: SAVE_TOKEN,
            payload: token
         });
      }
   } catch (err) {
      console.log("Error: ", err);
   }
};

export const createAccount = (username, password, email, name) => {
   return async dispatch => {
      const response = await idLogin.post("/registration/", {
         username,
         password1: password,
         password2: password,
         email,
         name
      });

      console.log("############## repsonse is ", response);
   };
};
