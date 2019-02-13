import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const PhotoComments = props => (
   <div>
      <ul>
         <Comment username={props.creator.username} comment={props.action} />
         {props.comments.map(comment => (
            <Comment
               username={comment.creator.username}
               comment={comment.message}
               key={comment.id}
            />
         ))}
      </ul>
   </div>
);

const Comment = props => (
   <li>
      <span>{props.username}</span>
      <span>{props.comments}</span>
   </li>
);

PhotoComments.propTypes = {
   caption: PropTypes.string.isRequired,
   creator: PropTypes.shape({
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired
   }).isRequired,
   comments: PropTypes.arrayOf(
      PropTypes.shape({
         message: PropTypes.string,
         creator: PropTypes.shape({
            profile_image: PropTypes.string,
            username: PropTypes.string.isRequired
         }).isRequired
      })
   ).isRequired
};

export default PhotoComments;
