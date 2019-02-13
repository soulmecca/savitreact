import React, { Component } from "react";
import PhotoActinos from "./presenter";

class PhotoActionsContainer extends Component {
   onClick = () => {
      if (this.props.is_liked) {
         this.props.unlikePhoto(this.props.id);
      } else {
         this.props.likePhoto(this.props.id);
      }
   };

   render() {
      return <PhotoActinos {...this.props} onHeartClick={this.onClick} />;
   }
}

export default PhotoActionsContainer;
