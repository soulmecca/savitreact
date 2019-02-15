import axios from "axios";

const imageAPI = token =>
   axios.create({
      baseURL: "/images/",
      headers: {
         Authorization: `JWT ${token}`
      }
   });

export default imageAPI;
