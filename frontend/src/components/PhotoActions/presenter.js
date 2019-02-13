import React from "react";
import PropTypes from "prop-types";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosTextOutline from "react-ionicons/lib/IosTextOutline";

import styles from "./styles.scss";

const PhotoActions = (props, context) => (
   <div>
      <div>
         <span>
            <IosHeartOutline fontSize="28px" color="black" />
         </span>
         <span>
            <IosTextOutline fontSize="28px" color="black" />
         </span>
      </div>
      <span>{props.likes === 1 ? context.t("like") : context.t("likes")}</span>
   </div>
);

PhotoActions.contextTypes = {
   t: PropTypes.func.isRequired
};

PhotoActions.propTypes = {
   likes: PropTypes.number.isRequired
};

export default PhotoActions;
