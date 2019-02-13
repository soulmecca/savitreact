import { GET_IMAGES } from "./types";
import image from "../../apis/image";

export const getFeed = token => async dispatch => {
   const response = await image(token).get();

   if (response.data) {
      dispatch({
         type: GET_IMAGES,
         payload: response.data
      });
   }
};
