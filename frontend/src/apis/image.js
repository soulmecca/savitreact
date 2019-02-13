import axios from "axios";

const image = token =>
   axios.create({
      baseURL: "/images/",
      headers: {
         Authorization: `JWT ${token}`
      }
   });

export default image;
