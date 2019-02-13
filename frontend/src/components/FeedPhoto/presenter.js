import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";

const FeedPhoto = (props, context) => {
   console.log(props);
   return (
      <div className={styles.feedPhoto}>
         <header className={styles.header}>
            <img
               src={
                  props.creator.profile_image || require("images/profile.jpg")
               }
               alt={props.creator.username}
               className={props.creator.name}
            />
            <div className={styles.headerColumn}>
               <span className={styles.creator}>{props.creator.username}</span>
               <span className={styles.location}>{props.location}</span>
            </div>
         </header>
         <img
            className={styles.mainImage}
            src={props.file}
            alt={props.caption}
         />
         <div className={styles.meta}>
            <PhotoActions likes={props.like_count} />
            <PhotoComments
               caption={props.caption}
               creator={props.creator}
               comments={props.comments}
            />
         </div>
      </div>
   );
};

FeedPhoto.propTypes = {
   creator: PropTypes.shape({
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired
   }).isRequired,
   location: PropTypes.string.isRequired,
   file: PropTypes.string.isRequired,
   like_count: PropTypes.number.isRequired,
   caption: PropTypes.string.isRequired,
   comments: PropTypes.arrayOf(
      PropTypes.shape({
         message: PropTypes.string,
         creator: PropTypes.shape({
            profile_image: PropTypes.string,
            username: PropTypes.string.isRequired
         }).isRequired
      })
   ).isRequired,
   created_at: PropTypes.string.isRequired
};

export default FeedPhoto;
