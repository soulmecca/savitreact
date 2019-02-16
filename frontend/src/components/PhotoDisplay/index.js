import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import IosHeart from "react-ionicons/lib/IosHeart";
import IosText from "react-ionicons/lib/IosText";

const PhotoDisplay = props => (
   <div className={styles.container}>
      <img
         src={props.photo.file}
         className={styles.photo}
         alt={props.photo.caption}
      />
      <div className={styles.overlay}>
         <span className={styles.data}>
            <IosHeart fontSize="22px" color="white" /> {props.photo.like_count}
         </span>
         <span className={styles.data}>
            <IosText fontSize="22px" color="white" />
            {props.photo.comment_count}
         </span>
      </div>
   </div>
);

export default PhotoDisplay;
