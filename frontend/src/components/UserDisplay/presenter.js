import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const UserDisplay = (props, context) => (
   <div className={props.horizontal ? styles.horizontal : styles.vertical}>
      <div className={styles.column}>
         <img
            src={props.user.profile_image || require("images/profile.jpg")}
            alt={props.user.username}
            className={props.big ? styles.bigAvatar : styles.avatar}
         />
         <div className={styles.user}>
            <span className={styles.username}>{props.user.username}</span>
            <span className={styles.name}>{props.user.name}</span>
         </div>
      </div>
      <div className={styles.column}>
         <button className={styles.button}>Following</button>
      </div>
   </div>
);

UserDisplay.propTypes = {
   user: PropTypes.shape({
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired
   }).isRequired
};

export default UserDisplay;
