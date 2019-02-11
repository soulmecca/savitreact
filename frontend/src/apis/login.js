import axios from "axios";

export default axios.create({
   baseURL: "/rest-auth",
   headers: {
      "Content-type": "application/json"
   }
});
