import React from "react";
import PropTypes from "prop-types";
import CommentBox from "./presenter";

class CommentBoxContainer extends React.Component {
   state = {
      comment: ""
   };
   render() {
      return (
         <CommentBox
            {...this.state}
            onInputChange={this.onInputChange}
            onKeyPress={this.onKeyPress}
         />
      );
   }

   onInputChange = event => {
      const {
         target: { value }
      } = event;
      this.setState({
         comment: value
      });
   };

   onKeyPress = event => {
      const { key } = event;

      if (key === "Enter") {
         event.preventDefault();
         this.props.createComment(this.props.pId, this.state.comment);
      }
   };
}

export default CommentBoxContainer;
