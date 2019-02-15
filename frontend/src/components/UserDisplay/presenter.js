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
      <div className={styles.column}>{renderButton(props, context)}</div>
   </div>
);

const renderButton = (props, context) => {
   if (parseInt(props.curUid) !== props.user.id) {
      return (
         <button className={styles.button} onClick={props.onButtonClick}>
            {props.user.following
               ? context.t("Following")
               : context.t("Follow")}
         </button>
      );
   }
};

UserDisplay.propTypes = {
   user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired,
      following: PropTypes.bool.isRequired
   }).isRequired
};

UserDisplay.contextTypes = {
   t: PropTypes.func.isRequired
};

export default UserDisplay;
