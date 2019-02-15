import axios from "axios";

const userAPI = token =>
   axios.create({
      baseURL: `/users`,
      headers: {
         Authorization: `JWT ${token}`,
         "Content-type": "application/json"
      }
   });

export default userAPI;
