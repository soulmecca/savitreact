import {
   SAVE_TOKEN,
   LOGOUT,
   SET_IMAGE_LIST,
   SET_USER_LIST,
   FOLLOW_USER,
   UNFOLLOW_USER
} from "./types";
import axios from "axios";

import { idLogin, socialLogin } from "../../apis/login";
import { access } from "fs";

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

export const usernameLogin = (username, password) => {
   console.log("@@@@ ", username, password);
   return async dispatch => {
      const response = await idLogin.post("/login/", { username, password });
      console.log("@@@@@ response is ", response);
      // if (response.token) {
      //    dispatch({
      //       type: SAVE_TOKEN,
      //       payload: response.token
      //    });
      // }
   };
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
