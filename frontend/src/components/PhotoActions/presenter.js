import React from "react";
import PropTypes from "prop-types";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosHeart from "react-ionicons/lib/IosHeart";
import IosTextOutline from "react-ionicons/lib/IosTextOutline";

import styles from "./styles.scss";

const renderHeart = props => {
   if (props.is_liked) {
      return (
         <IosHeart
            fontSize="28px"
            color="#EB4B59"
            onClick={props.onHeartClick}
         />
      );
   } else {
      return (
         <IosHeartOutline
            fontSize="28px"
            color="black"
            onClick={props.onHeartClick}
         />
      );
   }
};

const PhotoActions = (props, context) => (
   <div className={styles.actions}>
      <div className={styles.icons}>
         <span className={styles.icon}>{renderHeart(props)}</span>
         <span className={styles.icon}>
            <IosTextOutline fontSize="28px" color="black" />
         </span>
      </div>
      <span className={styles.likes}>
         {props.likes}{" "}
         {props.likes === 1 ? context.t("like") : context.t("likes")}
      </span>
   </div>
);

PhotoActions.contextTypes = {
   t: PropTypes.func.isRequired
};

PhotoActions.propTypes = {
   likes: PropTypes.number.isRequired,
   is_liked: PropTypes.bool.isRequired,
   id: PropTypes.number.isRequired,
   likePhoto: PropTypes.func.isRequired,
   unlikePhoto: PropTypes.func.isRequired,
   onHeartClick: PropTypes.func.isRequired
};

export default PhotoActions;
