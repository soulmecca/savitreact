import {
   GET_IMAGES,
   LIKE_PHOTO,
   UNLIKE_PHOTO,
   CREATE_COMMENT
} from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case GET_IMAGES:
         const posts = action.payload;
         return { ...state, posts };
      case LIKE_PHOTO:
         return applyLikePhoto(state, action, "like");
      case UNLIKE_PHOTO:
         return applyLikePhoto(state, action, "unlike");
      case CREATE_COMMENT:
         return applyAddComment(state, action);
      default:
         return state;
   }
};

function applyLikePhoto(state, action, like) {
   const pId = action.payload;
   const { posts } = state;
   const updatedPosts = posts.map(post => {
      if (pId === post.id) {
         if (like === "like") {
            return {
               ...post,
               is_liked: true,
               like_count: post.like_count + 1
            };
         } else {
            return {
               ...post,
               is_liked: false,
               like_count: post.like_count - 1
            };
         }
      }
      return post;
   });
   return { ...state, posts: updatedPosts };
}

function applyAddComment(state, action) {
   const { comment, pId } = action.payload;
   const { posts } = state;

   const updatedPosts = posts.map(post => {
      if (post.id === pId) {
         return {
            ...post,
            comments: [...post.comments, comment]
         };
      }
      return post;
   });
   return { ...state, posts: updatedPosts };
}
