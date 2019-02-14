import React from "react";
import PropTypes from "prop-types";
import Textarea from "react-textarea-autosize";
import styles from "./styles.scss";

const CommentBox = (props, context) => (
   <form className={styles.commentBox}>
      <Textarea
         className={styles.input}
         placeholder={context.t("Add a comment...")}
         value={props.comment}
         onChange={props.onInputChange}
         onKeyPress={props.onKeyPress}
      />
   </form>
);

CommentBox.propTypes = {
   onInputChange: PropTypes.func.isRequired,
   onKeyPress: PropTypes.func.isRequired,
   comment: PropTypes.string.isRequired
};

CommentBox.contextTypes = {
   t: PropTypes.func.isRequired
};

export default CommentBox;
