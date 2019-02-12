import axios from "axios";

export const auth = axios.create({
   baseURL: "/rest-auth",
   headers: {
      "Content-type": "application/json"
   }
});

export const socialLogin = axios.create({
   baseURL: "/users/login",
   headers: {
      "Content-type": "application/json"
   }
});
