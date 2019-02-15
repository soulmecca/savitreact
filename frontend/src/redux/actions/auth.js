import { SAVE_TOKEN, LOGOUT } from "./types";

import { auth, socialLogin } from "../../apis/login";

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
      const response = await auth.post("/login/", { username, password });
      const {
         data: { token, user }
      } = response;

      if (token) {
         dispatch({
            type: SAVE_TOKEN,
            payload: {
               token,
               user
            }
         });
      }
   } catch (err) {
      console.log("Error: ", err);
   }
};

export const createAccount = (
   username,
   password,
   email,
   name
) => async dispatch => {
   const response = await auth.post("/registration/", {
      username,
      password1: password,
      password2: password,
      email,
      name
   });

   const token = response.data.token;
   if (token) {
      dispatch({
         type: SAVE_TOKEN,
         payload: token
      });
   }
};

export const logout = () => dispatch => {
   console.log("inside logout");
   dispatch({
      type: LOGOUT
   });
};
